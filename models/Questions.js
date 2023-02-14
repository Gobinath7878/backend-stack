import mongoose from "mongoose";

const questionsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },

    answers: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Answers",
      },
    ],
    votes: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Questions", questionsSchema);
