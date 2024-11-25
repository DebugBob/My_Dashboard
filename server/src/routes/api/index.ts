import { Router } from 'express';
import { todoRouter } from './todo-routes.js';
import { newsRouter } from './news-routes.js';

const router = Router();

router.use('/todo', todoRouter);
router.use('/news', newsRouter);

export default router;
