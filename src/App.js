import React from'react';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <LandingPage/>
      </Router>
  );
}

export default App;
