// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';
// import Header from './Header';

// const fetchMatches = async () => {
//   try {
//     const response = await axios.get('http://localhost:5000/api/matches'); 
//     return response.data; 
//   } catch (error) {
//     console.error('Error fetching matches:', error);
//     return [];
//   }
// };

// const PlFixtures = () => {
//   const [matches, setMatches] = useState([]);
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     const getMatches = async () => {
//       const data = await fetchMatches();
     
//       const now = new Date();
//       const futureMatches = data.filter(match => new Date(match.utcDate) > now);
      
//       const sortedMatches = futureMatches.sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate));
//       setMatches(sortedMatches);
//     };
//     getMatches();
//   }, []);

//   const loadMoreMatches = async () => {
//     const data = await fetchMatches(page + 1);
//     const now = new Date();
//     const futureMatches = data.filter(match => new Date(match.utcDate) > now);
//     const sortedMatches = futureMatches.sort((a, b) => new Date(a.utcDate) - new Date(b.utcDate));
//     setMatches((prevMatches) => [...prevMatches, ...sortedMatches]);
//     setPage((prevPage) => prevPage + 1);
//   };

//   return (
//     <>
//     <Header/>
//     <NewsContainer>
//       {matches.map((match) => (
//         <MatchContainer key={match.id}>
//           <DateContainer>{new Date(match.utcDate).toLocaleDateString()}</DateContainer>
//           <TimeContainer>{new Date(match.utcDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</TimeContainer>
//           <TeamsContainer>
//             <Team>
//               <TeamLogo src={match.homeTeam.logo} alt={`${match.homeTeam.name} logo`} />
//               <TeamName>{match.homeTeam.name}</TeamName>
//             </Team>
//             <Vs>vs</Vs>
//             <Team>
//               <TeamLogo src={match.awayTeam.logo} alt={`${match.awayTeam.name} logo`} />
//               <TeamName>{match.awayTeam.name}</TeamName>
//             </Team>
//           </TeamsContainer>
//           <VenueContainer>{match.venue}</VenueContainer>
//           <VenueImage src={match.venueImage} alt="Venue" />
//         </MatchContainer>
//       ))}
//       <ButtonContainer>
//         <LoadMoreButton onClick={loadMoreMatches}>Load More</LoadMoreButton>
//       </ButtonContainer>
//     </NewsContainer>
//     </>
//   );
// };

// export default PlFixtures;

// const NewsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 20px;
// `;

// const MatchContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   border: 1px solid #ccc;
//   border-radius: 10px;
//   padding: 15px;
//   background-color: #f9f9f9;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
//   width: 80%;
//   max-width: 600px;
// `;

// const DateContainer = styled.div`
//   font-size: 1.2rem;
//   font-weight: bold;
//   margin-bottom: 5px;
// `;

// const TimeContainer = styled.div`
//   font-size: 1rem;
//   margin-bottom: 10px;
// `;

// const TeamsContainer = styled.div`
//   display: flex;
//   align-items: center;
//   margin-bottom: 10px;
// `;

// const Team = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// const TeamLogo = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   margin-bottom: 5px;
// `;

// const TeamName = styled.div`
//   font-size: 1rem;
// `;

// const Vs = styled.div`
//   font-size: 1.2rem;
//   font-weight: bold;
//   margin: 0 10px;
// `;

// const VenueContainer = styled.div`
//   font-size: 1rem;
//   margin-bottom: 10px;
// `;

// const VenueImage = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 5px;
// `;

// const ButtonContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
// `;

// const LoadMoreButton = styled.button`
//   padding: 10px 20px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   font-size: 16px;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const fetchStandings = async () => {
  try {
    const response = await axios.get('http://localhost:5000/api/standings'); 
    return response.data; 
  } catch (error) {
    console.error('Error fetching standings:', error);
    return [];
  }
};

const PlFixtures = () => {
  const [standings, setStandings] = useState([]);

  useEffect(() => {
    const getStandings = async () => {
      const data = await fetchStandings();
      setStandings(data.standings.table);
    };
    getStandings();
  }, []);

  return (
    <Container>
      <Header>
        <Flag src="https://crests.football-data.org/770.svg" alt="England Flag" />
        <CompetitionLogo src="https://crests.football-data.org/PL.png" alt="Premier League Logo" />
        <SeasonInfo>
          <h2>Premier League</h2>
          <p>Season: 2021-2022</p>
        </SeasonInfo>
      </Header>
      <StandingsTable>
        {standings.map((team) => (
          <TeamRow key={team.position}>
            <Position>{team.position}</Position>
            <TeamInfo>
              <TeamLogo src={team.team.crest} alt={`${team.team.name} logo`} />
              <TeamName>{team.team.name}</TeamName>
            </TeamInfo>
            <Stats>
              <Stat>{team.playedGames} Played</Stat>
              <Stat>{team.won} Won</Stat>
              <Stat>{team.draw} Draw</Stat>
              <Stat>{team.lost} Lost</Stat>
              <Stat>{team.points} Points</Stat>
              <Stat>{team.goalsFor} GF</Stat>
              <Stat>{team.goalsAgainst} GA</Stat>
              <Stat>{team.goalDifference} GD</Stat>
            </Stats>
          </TeamRow>
        ))}
      </StandingsTable>
    </Container>
  );
};

export default PlFixtures;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Flag = styled.img`
  width: 50px;
  height: auto;
  margin-right: 20px;
`;

const CompetitionLogo = styled.img`
  width: 50px;
  height: auto;
  margin-right: 20px;
`;

const SeasonInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StandingsTable = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
`;

const TeamRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const Position = styled.div`
  width: 30px;
  text-align: center;
`;

const TeamInfo = styled.div`
  display: flex;
  align-items: center;
`;

const TeamLogo = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const TeamName = styled.div`
  font-size: 1rem;
`;

const Stats = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const Stat = styled.div`
  width: 50px;
  text-align: center;
`;

