import React from 'react';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

const App = () => {
  return (
    <AppContainer>
      <Router>
        <LandingPage />
      </Router>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  border: 3px solid #ccc;
  border-radius: 10px;    
  padding: 20px;          
  margin: 20px;           
  box-shadow: 0 2px 5px rgba(82, 255, 73, 0.5);
  box-sizing: border-box; 
  
  @media (max-width: 768px) {
    margin: 10px; 
    padding: 15px;
  }

  @media (max-width: 480px) {
    margin: 5px;
    padding: 10px; 
  }
`;
