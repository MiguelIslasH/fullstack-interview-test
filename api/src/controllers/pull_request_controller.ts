import { Response } from "express";
import { exec } from "child_process";

import Controller from "./controller";

import { PR } from "../models/PullRequest";

class PullRequestController extends Controller {
  constructor(res: Response) {
    super(res);
  }

  async getAllPRs() {
    try {
      const storedPR = await PR.find();
      this.response.status(200).json({ data: storedPR });
    } catch (exception) {
      console.log(exception);
      this.response.status(500).json({ error: "Error while getting PRs" });
    }
  }

  async addPR(
    title: string,
    description: string,
    base: string,
    compare: string,
    status: string
  ) {
    try {
      if (status === "Merge") {
        exec("git checkout " + base, (err, stdout, stderr) => {});
        exec("git merge " + compare);
      }

      const pr = new PR({
        title,
        description,
        baseBranch: base,
        compareBranch: compare,
        status,
      });

      pr.save();

      this.response.status(201).json({ message: "Created PR" });
    } catch (exception) {
      console.log("Error while merging branches!");
      this.response
        .status(500)
        .json({ error: "Error while merging branches!" });
    }
  }

  async updateStatus(status: string, id: string) {
    try {
      await PR.findOneAndUpdate({ _id: id }, { status });
      this.response.status(200).json({ message: "Status updated" });
    } catch (exception) {
      console.log("Error while updating data!");
      this.response.status(500).json({ error: "Error while updating data!" });
    }
  }
}

export default PullRequestController;
