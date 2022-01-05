import { Response } from "express";
import { exec } from "child_process";

import Controller from "./controller";

class PullRequestController extends Controller {
  constructor(res: Response) {
    super(res);
  }

  async getAllPRs() {}

  async addPR() {
    try {
      exec("git checkout master");
      exec("git merge PR_feature");
      console.log("Merged");
    } catch (exception) {
      console.log("Error!");
    }
  }
}

export default PullRequestController;
