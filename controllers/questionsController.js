import Questions from "../models/Questions.js";

//post new question

export const createQuestions = async (req, res) => {
  const newQuestions = new Questions(req.body);

  try {
    const savedQuestions = await newQuestions.save();

    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedQuestions,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Failed to create.Try again",
    });
  }
};

// update question
export const updateQuestions = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedQuestions = await Questions.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedQuestions,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

// delete question
export const deleteQuestions = async (req, res) => {
  const id = req.params.id;

  try {
    await Questions.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};

// getSingle question
export const getSingleQuestions = async (req, res) => {
  const id = req.params.id;

  try {
    const questions = await Questions.findById(id).populate("answers");

    res.status(200).json({
      success: true,
      message: "Successfully found",
      data: questions,
    });
  } catch (err) {
    console.log(err)
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// getAll question
export const getAllQuestions = async (req, res) => {
  const page = parseInt(req.query.page);
  try {
    const questions = await Questions.find({})
      .populate("answers")
      .skip(page * 8)
      .limit(8);

    res.status(200).json({
      success: true,
      count: questions.length,
      message: "Successfully found",
      data: questions,
    });
  } catch (err) {
    console.log(err)
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get question by search

export const getQuestionsBySearch = async (req, res) => {
  const title = new RegExp(req.query.title, "i");
  try {
    const questions = await Questions.find({
      title,
  }).populate("Answers");

    res.status(200).json({
      success: true,
      message: "Successfully found",
      data: questions,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get featured question

export const getFeaturedQuestions = async (req, res) => {
  try {
    const questions = await Questions.find({ featured: true })
    .populate("reviews")
    .limit(8);

    res.status(200).json({
      success: true,
      message: "Successfully found",
      data: questions,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found",
    });
  }
};

// get question counts
export const getQuestionsCount = async (req, res) => {
  try {
    const questionsCount = await Questions.estimatedDocumentCount();
    res.status(200).json({ success: true, data: questionsCount });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to fetch" });
  }
};

//votes count
export const getQuestionsVote= async (req, res) => {
  try {
    const questionsVote = await Questions.findById(req.params.id);
    questionsVote.votes += 1;
    await questionsVote.save();
    res.status(200).send();
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
}
