import simpleGit, { SimpleGit, SimpleGitOptions } from "simple-git";

const options: Partial<SimpleGitOptions> = {
  baseDir: process.cwd(),
  binary: "git",
  maxConcurrentProcesses: 5,
};

class Controller {
  private _git: SimpleGit;
  constructor() {
    this._git = simpleGit(options);
  }

  public get git() {
    return this._git;
  }
}

export default Controller;
