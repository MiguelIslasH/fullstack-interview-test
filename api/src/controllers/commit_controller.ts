import { Response } from "express";

import Controller from "./controller";

import Commit from "../models/commit";

class CommitController extends Controller {
  constructor(response: Response) {
    super(response);
  }

  async getCommitLog(branchName: string) {
    try {
      this.git.checkout(branchName);
      const commitsLog = (await this.git.log({ multiLine: true })).all;
      const formatedCommits = commitsLog.map<Commit>(
        (commit) =>
          new Commit(
            commit.hash,
            commit.message,
            commit.date,
            commit.author_name,
            commit.author_email
          )
      );

      this.controllerResponse = {
        status: 200,
        message: "All commits are here!",
        data: formatedCommits,
      };

      this.response
        .status(this.controllerResponse.status)
        .json(this.controllerResponse.data);
    } catch (exception) {
      console.log(exception);
      this.controllerResponse = {
        status: 500,
        error: "An error has ocurred",
      };
      const error = this.controllerResponse.error;
      this.response.status(this.controllerResponse.status).json({ error });
    }
  }
}

export default CommitController;
