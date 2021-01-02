import {Request, Response, Router as createRouter} from 'express';
import isProtected from '../../protected';

/**
 * Route for get user logged data.
 * @param {Request} req Request param.
 * @param {Response} res Response param.
 * @return {Response}
 */
function me(req: Request, res: Response): Response {
  return res.json(req.auth.user);
}

const router = createRouter();
router.get('/', isProtected, me);

export default router;
