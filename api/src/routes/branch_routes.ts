import { Router } from "express";

import BranchController from "../controllers/branch_controller";

const BranchRouter = Router();

//Get all branches of this project
BranchRouter.get("/", async (_, res, next) => {
  const controller = new BranchController(res);
  await controller.getAllBranches();

  next();
});

export default BranchRouter;
