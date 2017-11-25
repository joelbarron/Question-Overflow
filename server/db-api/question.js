import Debug from 'debug'
import { Question, Answer } from '../models'


const debug = new Debug('question-overflow:db-api:questions')

export default {
  findAll: (sort = '-createdAt') => {
    debug('Finding all questions')

    return Question.find().populate('answers').sort(sort)
  },

  findById: (_id) => {
    debug(`Finding question with id: ${_id}`)

    return Question.findOne({ _id })
      .populate('user')
      .populate({
        path: 'answers',
        options: { sort: '-createdAt' },
        populate: {
          path: 'user',
          model: 'User'
        }
      })
  },

  createQuestion: (q) => {
    debug(`Creating new question ${q}`)

    const question = new Question(q)
    return question.save()
  },

  createAnswer: async (q, a) => {
    debug(`Creating new answer for question: ${q._id}`)

    const answer = new Answer(a)
    const savedAnswer = await answer.save()
    q.answers.push(savedAnswer)
    await q.save()
    return savedAnswer
  }

}
