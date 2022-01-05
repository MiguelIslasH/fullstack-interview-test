import Express from "express";
import morgan from "morgan";
import CORS from "cors";

import CommitRouter from "./routes/commit_routes";
import BranchRouter from "./routes/branch_routes";
import PullRequestRouter from "./routes/pull_request_routes";

//Init
const app = Express();

//Middlewares
app.use(CORS());
app.use(morgan("short"));
app.use(Express.urlencoded({ extended: false }));
app.use(Express.json());

//Routes
app.use("/commit", CommitRouter);
app.use("/branch", BranchRouter);
app.use("/PR", PullRequestRouter);

app.listen(5000, () => {
  console.log("Git wrapper API listening in: localhost:5000");
});
