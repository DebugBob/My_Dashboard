import { Request, Response } from 'express';
import weatherService from '../service/weatherService.js';

// GET /weather
export const getWeatherData = async (req: Request, res: Response) => {
  try {
    const { userLocation } = req.body
    const weatherData = await weatherService.getWeatherData(userLocation);
    res.json(weatherData);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
