import express from "express";
import {
  deleteUser,
  updateUser,
  getSingleUser,
  getAllUser,
} from "../controllers/userController.js";
const router = express.Router();

// import { verifyUser, } from "../utils/verifyToken.js";
// update user
router.put("/:id", updateUser);

// delete user
router.delete("/:id", deleteUser);

// get single user
router.get("/:id", getSingleUser);

// get All user
router.get("/", getAllUser);

export default router;