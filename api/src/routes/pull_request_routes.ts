import { Router } from "express";

import PullRequestController from "../controllers/pull_request_controller";

const PullRequestRouter = Router();

PullRequestRouter.get("/", (req, res) => {
  const PRController = new PullRequestController(res);
  PRController.getAllPRs();
});

PullRequestRouter.post("/", (req, res) => {
  const PRController = new PullRequestController(res);
  PRController.addPR();
});

export default PullRequestRouter;
