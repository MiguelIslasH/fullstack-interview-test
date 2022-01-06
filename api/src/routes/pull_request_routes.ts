import { Router } from "express";

import PullRequestController from "../controllers/pull_request_controller";

const PullRequestRouter = Router();

PullRequestRouter.get("/", (req, res) => {
  const PRController = new PullRequestController(res);
  PRController.getAllPRs();
});

PullRequestRouter.post("/", (req, res) => {
  const { title, description, base, compare, status } = req.body;

  const PRController = new PullRequestController(res);
  PRController.addPR(title, description, base, compare, status, author);
});

export default PullRequestRouter;
