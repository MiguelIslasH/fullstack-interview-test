import { Response } from "express";
import simpleGit, { SimpleGit, SimpleGitOptions } from "simple-git";

interface ControllerResponse {
  status: number;
  message?: string;
  data?: object;
  error?: string;
}

const options: Partial<SimpleGitOptions> = {
  baseDir: "/usr/git/",
  maxConcurrentProcesses: 5,
};

class Controller {
  private _git: SimpleGit;
  private _response: Response;
  private _controllerResponse: ControllerResponse;

  constructor(response: Response) {
    this._git = simpleGit(options);
    this._response = response;
    this._controllerResponse = { status: 500 };
  }

  public get git() {
    return this._git;
  }

  public get response() {
    return this._response;
  }

  public get controllerResponse() {
    return this._controllerResponse;
  }

  public set controllerResponse(response: ControllerResponse) {
    this._controllerResponse = response;
  }
}

export default Controller;
