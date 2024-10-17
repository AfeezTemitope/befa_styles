import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PlFixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFixtures = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/fixtures'); 
        const now = new Date();

     
        const upcomingFixtures = response.data.filter(fixture => new Date(fixture.date) > now);

        setFixtures(upcomingFixtures);
        console.log(upcomingFixtures); 
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
      <h1>Upcoming Fixtures</h1>
      <ul>
        {fixtures.map(fixture => (
          <FixtureItem key={fixture.id}>
            <MatchContainer>
              <TeamContainer>
                <Logo src={fixture.team_a_logo} alt={`${fixture.team_a} logo`} />
                <div>{fixture.team_a}</div>
              </TeamContainer>
              <MatchInfo>
                <div>{fixture.venue}</div>
                <div>{new Date(fixture.date).toLocaleString()}</div>
              </MatchInfo>
              <TeamContainer>
                <Logo src={fixture.team_h_logo} alt={`${fixture.team_h} logo`} />
                <div>{fixture.team_h}</div>
              </TeamContainer>
            </MatchContainer>
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
  box-shadow: 0 4px 10px rgba(0, 128, 0, 0.5);
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const FixtureItem = styled.li`
  margin: 20px 0;
  list-style-type: none;
`;

const MatchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TeamContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  height: auto;
  margin-right: 10px;
`;

const MatchInfo = styled.div`
  text-align: center;
`;

const ErrorMessage = styled.div`
  color: red;
  font-weight: bold;
`;
