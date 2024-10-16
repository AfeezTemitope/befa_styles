import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PlFixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await axios.get('https://fantasy.premierleague.com/api/fixtures/');
        setFixtures(response.data);
        console.log(response); // Assuming response.data is the correct format
      } catch (error) {
        console.error('Error fetching fixtures:', error);
        setError('Failed to fetch fixtures. Please try again later.');
      }
    };

    fetchFixtures();
  }, []);

  if (error) {
    return <ErrorMessage>{error}</ErrorMessage>;
  }

  return (
    <FixturesContainer>
      <h1>Fixtures</h1>
      <ul>
        {fixtures.map(fixture => (
          <FixtureItem key={fixture.id}>
            {fixture.team_a} vs {fixture.team_h} - {new Date(fixture.date).toLocaleString()}
          </FixtureItem>
        ))}
      </ul>
    </FixturesContainer>
  );
};

export default PlFixtures;

const FixturesContainer = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 4px 10px rgba(0, 128, 0, 0.5); /* Green shadow */
  border-radius: 8px;
  background-color: #f9f9f9;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const FixtureItem = styled.li`
  margin: 10px 0;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
`;
