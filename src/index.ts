import {Response, Router as newRouter, Router} from 'express';
import IAuth from 'IAuth';
import IConfig from 'IConfig';
import routes from './routes';

export {default as isProtected} from './protected';
export {default as IConfig} from './IConfig';

/**
 * Server middleware.
 */
export default class GreenAuthServer<TEncodedData = any> {
  // Props
  static _secret: string;
  static default: GreenAuthServer;
  public encode: (
    auth: IAuth,
    next: (error: any, data: TEncodedData) => Function | Response<any>
  ) => Function | Response<any>;
  public decode: (
    token: TEncodedData,
    next: (error: Error | null, auth: IAuth) => Function | Response<any>
  ) => Function | Response<any>;

  /**
   * Build an instance of `GreenAuthServer`.
   * @param {{ app: Application }} config The second number.
   */
  constructor(config: IConfig<TEncodedData>) {
    GreenAuthServer._secret = config.secret;
    this.encode = config.encode;
    this.decode = config.decode;
    GreenAuthServer.default = this;
  }
  // Methods

  /**
   * Initialize the middleware
   * @return {Router} return a router middleware.
   */
  initialize = (): Router => {
    const router = newRouter();
    router.use(routes);
    return routes;
  };
}
