import Express from "express";
import morgan from "morgan";

import CommitRouter from "./routes/commit_routes";
import BranchRouter from "./routes/branch_routes";

//Init
const app = Express();

//Middlewares
app.use(morgan("short"));
app.use(Express.urlencoded({ extended: false }));
app.use(Express.json());

//Routes
app.use("/commit", CommitRouter);
app.use("/branch", BranchRouter);

app.listen(5000, () => {
  console.log("Git wrapper API listening in: localhost:5000");
});
