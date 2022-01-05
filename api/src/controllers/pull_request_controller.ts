import { Response } from "express";

import Controller from "./controller";

class PullRequestController extends Controller {
  constructor(res: Response) {
    super(res);
  }

  async getAllPRs() {}
}

export default PullRequestController;
