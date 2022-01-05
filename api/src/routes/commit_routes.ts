import { Router } from "express";

import CommitController from "../controllers/commit_controller";

const CommitRouter = Router();

//Get all commits in this project
CommitRouter.get("/", async (_, res, next) => {
  const controller = new CommitController(res);
  await controller.getCommitLog();

  next();
});

export default CommitRouter;
