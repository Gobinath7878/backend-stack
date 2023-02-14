import express from "express";
import {
  createQuestions,
  updateQuestions,
  deleteQuestions,
  getAllQuestions,
  getFeaturedQuestions,
  getQuestionsBySearch,
  getQuestionsCount,
  getSingleQuestions,
} from "../controllers/questionsController.js";

const router = express.Router();

//post new question
router.post("/create", createQuestions);

// update question
router.put("/:id", updateQuestions);

// delete question
router.delete("/:id", deleteQuestions);

// get single question
router.get("/:id", getSingleQuestions);

// get All questions
router.get("/", getAllQuestions);

//add vote 
router.post("/:id/vote")
// get questions by search
router.get("/search/getQuestionsBySearch", getQuestionsBySearch);
router.get("/search/getQuestionsTours", getFeaturedQuestions);
router.get("/search/getQuestionsCount", getQuestionsCount);

export default router;
