import { question } from '../db-api'
import { handleError } from '../utils';

export const questionMiddleware = async (req, res, next)  => {

  try {
    req.question = await question.findById(req.params.id)
    next()
  } catch (error) {
    handleError(error, res)
  }

}


// const currentUser = {
//   firstName: 'Joel',
//   lastName: 'Barron',
//   email: 'correo@dominio.com',
//   password: '123456'
// }

// const qFix = {
//   _id: 1,
//   title: '¿Como reutilizo un componente en android?',
//   description: 'Tengo una pregunta! Estoy desarrollando una app para ...',
//   createdAt: new Date(),
//   icon: 'devicon-android-plain',
//   answers: [],
//   user: currentUser
// }

// export let questionsFix = new Array(10).fill(qFix)



// // middlewares


// export const questionsMiddleware = (req, res, next) => {
//   req.questions = questionsFix
//   next()
// }

// export const questionMiddleware = (req, res, next) => {
//   const { id } = req.params
//   //const q = questions.find(question => question._id === +id) // con el + se transforma a numero el parametro
//   req.question = questionsFix.find(({ _id }) => _id === +id)
//   next()
// }

// function userMiddleware(req, res, next) {
//   req.user = currentUser
//   next()
// }
