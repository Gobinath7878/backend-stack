import express from 'express'
import { createAnswers } from '../controllers/answersController.js'
import { verifyUser } from '../utils/verifyToken.js'

const router= express.Router()

router.post('/:questionsId',verifyUser, createAnswers)

export default router