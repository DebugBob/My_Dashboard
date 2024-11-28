const retrieveNews = async (): Promise<string[]> => {
  try {

    const response = await fetch('/api/news', {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    const newsData = await response.json();

    if (!response.ok) {
      throw new Error('Invalid user API response, check network tab!');
    }

    return newsData?.webTitles ?? [];

  } catch (err) {
    console.log('Error from data retrieval:', err);
    return [];
  }
}

export { retrieveNews };