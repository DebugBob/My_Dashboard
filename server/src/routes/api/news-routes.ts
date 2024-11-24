import express from 'express';
import { getNewsData } from '../../controllers/news-controller.js';

const router = express.Router();

// GET /news - Get news
router.get('/', getNewsData);


export { router as newsRouter };