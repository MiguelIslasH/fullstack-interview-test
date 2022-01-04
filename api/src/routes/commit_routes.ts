import { Router } from "express";

import CommitController from "../controllers/commit_controller";

const CommitRouter = Router();

//Get all commits
CommitRouter.get("/", (req, res, next) => {
  const controller = new CommitController(res);
  controller.getCommitLog();

  next();
});

export default CommitRouter;
