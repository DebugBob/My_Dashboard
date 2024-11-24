const retrieveNews = async (): Promise<string | null> => {
  try {

    const response = await fetch('/api/news', {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${Auth.getToken()}`
      }
    });

    console.log('res=', response)

    const newsData = await response.json();

    if (!response.ok) {
      throw new Error('Invalid user API response, check network tab!');
    }

    return newsData?.webTitle;

  } catch (err) {
    console.log('Error from data retrieval:', err);
    return null;
  }
}

export { retrieveNews };