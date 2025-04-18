import { Router } from "express";
import {
  deleteAuthorByIdController,
  getAuthorByIdController,
  getAuthorsController,
  updateAuthorByIdController,
  createAuthorController,
} from "../controllers/authorController";

const authorRouter = Router();

authorRouter.get("/", getAuthorsController);
authorRouter.get("/:id", getAuthorByIdController);
authorRouter.post("/", createAuthorController);
authorRouter.patch("/:id", updateAuthorByIdController);
authorRouter.delete("/:id", deleteAuthorByIdController);

export default authorRouter;
