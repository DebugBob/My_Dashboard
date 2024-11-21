import { Router } from 'express';
import { todoRouter } from './todo-routes.js';

const router = Router();

router.use('/todo', todoRouter);

export default router;
