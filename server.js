require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
console.log(process.env)
const API_KEY = process.env.REACT_APP_PL;
const API_URL = 'https://api.football-data.org/v4/competitions/PL/standings';


app.get('/api/standings', async (req, res) => {
  try {
    const response = await axios.get(API_URL, {
      headers: { 'X-Auth-Token': API_KEY },
    });
    res.json(response.data.matches);
  } catch (error) {
    console.error('Error fetching matches:', error);
    res.status(500).json({ error: 'Error fetching matches' });
  }
});

app.get('/api/fixtures', async (req, res) => {
  try {
    const response = await axios.get('https://fantasy.premierleague.com/api/fixtures/');
    const fixtures = response.data; 
    console.log('Fetched fixtures:', fixtures);
    res.json(fixtures);
  } catch (error) {
    console.error('Error fetching fixtures:', error);
    res.status(500).json({ message: 'Error fetching fixtures' });
  }
});
app.get('/api/sports-news', async (req, res) => {
  const apiKey = process.env.REACT_APP_NEWS_API;
  
  try {
    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: {
        q: 'Nigeria League',
        language: 'en',
        sortBy: 'publishedAt',
        apiKey: apiKey,
        pageSize: 100,
      },
    });
    res.json(response.data.articles);
  } catch (error) {
    console.error('Error fetching news from News API:', error.message);
    res.status(500).json({ message: 'Error fetching sports news', error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
