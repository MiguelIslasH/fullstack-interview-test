import { Response } from "express";

import Controller from "./controller";

import Commit from "../models/commit";

class BranchController extends Controller {
  constructor(response: Response) {
    super(response);
  }

  async getAllBranches() {
    try {
      const localBranches = await this.git.branchLocal();

      this.controllerResponse = {
        status: 200,
        message: "All branches are here!",
        data: localBranches,
      };

      this.response
        .status(this.controllerResponse.status)
        .json(this.controllerResponse.data);
    } catch (exception) {
      this.controllerResponse = {
        status: 500,
        error: "An error has ocurred",
      };
      const error = this.controllerResponse.error;
      this.response.status(this.controllerResponse.status).json({ error });
    }
  }
}

export default BranchController;
