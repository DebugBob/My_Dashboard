import { Router } from 'express';
import { todoRouter } from './todo-routes.js';
import { weatherRouter } from './weather-routes.js';

const router = Router();

router.use('/todo', todoRouter);
router.use('/weather', weatherRouter);

export default router;
