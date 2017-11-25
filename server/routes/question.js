import express from 'express'
import { requiredUserMiddleware, questionMiddleware } from '../middleware'
import { question } from '../db-api'
import { handleError } from '../utils'
import { User } from '../models'

const app = express.Router()

// GET:: /api/questions [listar las preguntas]
app.get('/', async (req, res) => {

  try {
    const { sort } = req.query
    const response = await question.findAll(sort)
    res.status(200).json(response)
  } catch (error) {
    handleError(error, res)
  }

})

// GET:: /api/questions/:id [listar una pregunta]
app.get('/:id', questionMiddleware,async (req, res) => {

  try {
    res.status(200).json(req.question)
  } catch (error) {
    handleError(error, res)
  }

})

// POST:: /api/questions [crear una pregunta]
app.post('/', requiredUserMiddleware, async (req, res) => {

  try {

    const { title, description, icon } = req.body

    const q = {
      title,
      description,
      icon,
      user: req.user._id
    }

    const savedQuestion = await question.createQuestion(q)
    res.status(201).json(savedQuestion)

  } catch (error) {
    handleError(error, res)
  }

})

// POST:: /api/questions/:id/answers [crear una respuesta para una pregunta]
app.post('/:id/answers', requiredUserMiddleware, questionMiddleware, async (req, res) => {

  try {
    const a = req.body
    const q = req.question

    // answer.createdAt = new Date()
    a.user = new User(req.user)

    const savedAnswer = await question.createAnswer(q, a)
    res.status(201).json(savedAnswer)

  } catch (error) {
    handleError(error, res)
  }
})

export default app
