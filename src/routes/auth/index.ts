import {Router as createRouter} from 'express';
import me from './me';

const router = createRouter();
router.use('/me', me);

export default router;
