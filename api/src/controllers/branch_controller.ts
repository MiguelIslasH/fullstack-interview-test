import { Response } from "express";

import Controller from "./controller";

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
    } catch (exception) {
      this.controllerResponse = {
        status: 500,
        error: "An error has ocurred",
      };
      const error = this.controllerResponse.error;
    } finally {
      return this.controllerResponse;
    }
  }
}

export default BranchController;
