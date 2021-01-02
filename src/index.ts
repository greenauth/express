import { Application } from "express";

export default class GreenAuthServer {
  // Props
  private _app: Application;

  // Constructor
  constructor({ app }: { app: Application }) {
    this._app = app;
  }

  // Methods
}
