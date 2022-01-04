import { Response } from "express";

import Controller from "./controller";

class CommitController extends Controller {
  private respose: Response;

  constructor(response: Response) {
    super();
    this.respose = response;
  }

  getCommitLog() {
    console.log(this.git.log());
  }
}

export default CommitController;
