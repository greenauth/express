import {Request, Response} from 'express';
import * as jwt from 'jsonwebtoken';
import GreenAuthServer from './index';

/**
   * Middleware that checks if there is an active user
   * @param {Request} req
   * @param {Response} res
   * @param {Function} next
   * @return {Function}
   */
function isProtected(
    req: Request,
    res: Response,
    next: Function,
): Function | Response {
  if (!req.headers.authorization) return res.sendStatus(401);
  try {
    const token = jwt.verify(
        req.headers.authorization.split(' ')[1],
        GreenAuthServer._secret,
    );
    req.auth = {token};
    return next();
  } catch (error) {
    return res.sendStatus(401);
  }
}
export default isProtected;
