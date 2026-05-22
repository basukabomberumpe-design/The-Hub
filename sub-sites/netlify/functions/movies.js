const fetch = require('node-fetch');

exports.handler = async (event) => {
  const key = process.env.TMDB_KEY;
  const q = (event.queryStringParameters && event.queryStringParameters.q) || 'avengers';
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${encodeURIComponent(q)}`;

  try {
    const r = await fetch(url);
    const data = await r.json();
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'TMDB request failed' }),
    };
  }
};
