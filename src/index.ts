import {Application, Request} from 'express';

declare module 'express-serve-static-core' {
  // eslint-disable-next-line no-unused-vars
  interface Request {
    auth: any;
  }
}

/**
 * Server middleware.
 */
export default class GreenAuthServer {
  // Props
  private _app: Application;

  /**
   * Build an instance of `GreenAuthServer`.
   * @param {any} config The second number.
   */
  constructor(config: { app: Application }) {
    this._app = config.app;
    this._app.get('auth/me', (req: Request, res) => {
      if (!req.auth) return res.sendStatus(401);
      return res.json({});
    });
  }

  // Methods
}
