import mongoose from "mongoose";

const answersSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Types.ObjectId,
      ref: "Questions",
    },
    username: {
      type: String,
      required: true,
    },
    answerText: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Answers", answersSchema);
