require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());

app.get('/api/fixtures', async (req, res) => {
  try {
    const response = await axios.get('https://fantasy.premierleague.com/api/fixtures/');
    const fixtures = response.data.map(fixture => ({
      id: fixture.id,
      team_a: fixture.team_a,
      team_a_logo: `https://resources.premierleague.com/premierleague/logos/${fixture.team_a}.png`, 
      team_h: fixture.team_h,
      team_h_logo: `https://resources.premierleague.com/premierleague/logos/${fixture.team_h}.png`, 
      venue: fixture.venue || 'Unknown Venue', 
      date: fixture.date,
    }));
    res.json(fixtures);
  } catch (error) {
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
