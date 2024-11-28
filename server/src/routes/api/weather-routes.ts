import * as express from 'express';
import { getWeatherData } from '../../controllers/weather-controller.js';

const router = express.Router();

// GET /weather - Get weather
router.get('/', getWeatherData);


export { router as weatherRouter };