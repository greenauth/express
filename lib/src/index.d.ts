import { Router } from 'express';
export { default as isProtected } from './protected';
/**
 * Server middleware.
 */
export default class GreenAuthServer {
    static _secret: string;
    /**
     * Build an instance of `GreenAuthServer`.
     * @param {{ app: Application }} config The second number.
     */
    constructor(config: {
        secret: string;
    });
    /**
     * Initialize the middleware
     * @return {Router} return a router middleware.
     */
    initialize: () => Router;
}
