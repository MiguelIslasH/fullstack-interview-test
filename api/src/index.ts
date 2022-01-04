import Express from "express";

import CommitRouter from "./routes/commit_routes";

//Init
const app = Express();

//Middlewares
app.use(Express.urlencoded({ extended: false }));
app.use(Express.json());

//Routes
app.use("/commit", CommitRouter);

app.listen(5000, () => {
  console.log("Git wrapper API listening in: localhost:5000");
});
