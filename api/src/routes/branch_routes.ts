import { Router } from "express";

import BranchController from "../controllers/branch_controller";

const BranchRouter = Router();

//Get all branches of this project
BranchRouter.get("/", async (_, res) => {
  const controller = new BranchController(res);
  const responseData = await controller.getAllBranches();
  if (responseData.status === 200) {
    res.status(responseData.status).json(responseData.data);
  } else {
    res.status(responseData.status).json(responseData.error);
  }
});

export default BranchRouter;
