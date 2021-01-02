import {Router as newRouter, Router} from 'express';
import routes from './routes';

export {default as isProtected} from './protected';

/**
 * Server middleware.
 */
export default class GreenAuthServer {
  // Props
  static _secret: string;

  /**
   * Build an instance of `GreenAuthServer`.
   * @param {{ app: Application }} config The second number.
   */
  constructor(config: { secret: string }) {
    GreenAuthServer._secret = config.secret;
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
