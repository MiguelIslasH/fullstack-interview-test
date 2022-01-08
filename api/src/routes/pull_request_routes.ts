import { Router } from "express";

import PullRequestController from "../controllers/pull_request_controller";

const PullRequestRouter = Router();

//Get all Pull request saved on DB
PullRequestRouter.get("/", (req, res) => {
  const PRController = new PullRequestController(res);
  PRController.getAllPRs();
});

//Post a PR to DB and in case, merge branches
PullRequestRouter.post("/", (req, res) => {
  const { title, description, base, compare, status } = req.body;

  const PRController = new PullRequestController(res);
  PRController.addPR(title, description, base, compare, status);
});

//Update status of PR
PullRequestRouter.put("/", (req, res) => {
  const { id, status } = req.body;

  const PRController = new PullRequestController(res);
  PRController.updateStatus(status, id);
});

export default PullRequestRouter;
