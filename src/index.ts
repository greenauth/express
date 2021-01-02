import { Application } from "express";

export default class GreenAuthServer {
  // Props
  private _app: Application;

  // Constructor
  constructor({ app }: { app: Application }) {
    this._app = app;
    this._app.get("auth/me", (req: any, res) => {
      if (!req.auth) return res.sendStatus(401);
      return res.json({});
    });
  }

  // Methods
}
