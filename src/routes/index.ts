import {Router as createRouter} from 'express';
import auth from './auth';

const router = createRouter();

router.use('/auth', auth);

export default router;
