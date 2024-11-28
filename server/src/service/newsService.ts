

class NewsService {
  async getNewsData(): Promise<string[] | Error> {
    try {
      const url = `${process.env.NEWS_API_BASE_URL}/search?api-key=${process.env.NEWS_API_KEY}`
      const res = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      const jsonResponse = await res.json()
      return jsonResponse?.response?.results?.map((res: any) => res.webTitle) ?? []
    } catch (err) {
      console.log('Error:', err);
      return err as Error;
    }
  }
}

export default new NewsService();