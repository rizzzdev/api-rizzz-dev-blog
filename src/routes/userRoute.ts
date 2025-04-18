import { Router } from "express";
import {
  createUserController,
  deleteUserByIdController,
  getUserByIdController,
  getUsersController,
  updateUserByIdController,
} from "../controllers/userController";

const userRouter = Router();

userRouter.get("/", getUsersController);
userRouter.get("/:id", getUserByIdController);
userRouter.post("/", createUserController);
userRouter.patch("/:id", updateUserByIdController);
userRouter.delete("/:id", deleteUserByIdController);

export default userRouter;
