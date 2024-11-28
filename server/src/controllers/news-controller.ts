import { Request, Response } from 'express';
import newsService from '../service/newsService.js';

// GET /news
export const getNewsData = async (_req: Request, res: Response) => {
  try {
    const newsData = await newsService.getNewsData();
    res.json({ webTitles: newsData });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
