import { Router } from "express";

import CommitController from "../controllers/commit_controller";

const CommitRouter = Router();

//Get all commits in this project from a specific branch
CommitRouter.get("/:branchName", async (req, res, next) => {
  const branchName = req.params["branchName"];
  const controller = new CommitController(res);
  await controller.getCommitLog(branchName);

  next();
});

export default CommitRouter;
