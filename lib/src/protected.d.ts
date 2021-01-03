import { Request, Response } from 'express';
/**
   * Middleware that checks if there is an active user
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   * @return {Function}
   */
declare function isProtected(req: Request, res: Response, next: Function): Function | Response;
export default isProtected;
