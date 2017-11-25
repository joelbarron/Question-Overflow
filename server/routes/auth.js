import express from 'express'
import Debug from 'debug'
import jwt from 'jsonwebtoken'
import { secret } from '../config'
import { User } from '../models'
import { handleError } from '../utils'
import {
  hashSync as hash,
  compareSync as comparePasswords
 } from 'bcryptjs'

const debug = new Debug('question-overflow:auth')

const app = express.Router()


// ::/api/auth/signin
app.post('/signin', async (req, res) => {

  try {
    const { email, password } = req.body

    // buscar el usuario en la db
      const user =  await User.findOne({ email })

      // si no hay usuario
      if (!user) {
        debug(`User with email: ${email} not found`)
        return handleLoginFailed(res)
      }

      // comparar los passwords
      if (!comparePasswords(password, user.password)) {
        debug(`Passwords do not match: ${password} !== ${user.password}`)
        return handleLoginFailed(res, 'El correo y la contraseña no coinciden')
      }

      // crear token
      const token = createToken(user)

      res.status(200).json({
        message: 'Login succeded',
        token,
        userId: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      })
  } catch (error) {
    handleError(error, res)
  }


  function handleLoginFailed(res, message) {
    return res.status(401).json({
      message: 'Login failed',
      error: message || 'Email and password don\'t match'
    })
  }
})

// ::/api/auth/signup
app.post('/signup', async (req, res) => {

  try {
    const { firstName, lastName, email, password } = req.body

      const u = new User({
        firstName,
        lastName,
        email,
        password: hash(password, 10)
      })

      debug(`Creating new user: ${u}`)

      const user = await u.save()

      // crear token
      const token = createToken(user)

      res.status(201).json({
        message: 'User saved',
        token,
        userId: user._id,
        firstName,
        lastName,
        email
      })
  } catch (error) {
    handleError(error, res)
  }

})


//                  :: FUNCIONES ::

// funcion para crear token
const createToken = (user) => jwt.sign({ user }, secret, { expiresIn: 86400 })

export default app
