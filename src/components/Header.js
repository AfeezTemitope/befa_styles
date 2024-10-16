import React, { useState, useRef, useEffect } from 'react';
import Befa from '../assets/befa.png';
import styled from 'styled-components'; 

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <MainHeader>
      <Logo>
        <img src={Befa} alt="Logo" />
        <h1>BUDU ELITES FOOTBALL ACADEMY</h1>
      </Logo>
      <Hamburger onClick={toggleDropdown}>
        &#9776;
      </Hamburger>
      {dropdownVisible && (
        <DropdownContainer ref={dropdownRef}>
          <DropdownMenu>
            <DropdownItem>Home</DropdownItem>
            <DropdownItem>About</DropdownItem>
            <DropdownItem>News</DropdownItem>
            <DropdownItem>Contact</DropdownItem>
          </DropdownMenu>
        </DropdownContainer>
      )}
    </MainHeader>
  );
};

export default Header;

const MainHeader = styled.div`
  position: sticky;
  top: 0;
  background-color: #000;
  border-bottom: 2px solid #52ff49;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(177, 175, 175, 0.5);
  display: flex;
  justify-content: space-between; 
  align-items: center;
  z-index: 1000;
  color: white;

  @media (max-width: 768px) { 
    padding: 10px 15px;
  }

  @media (max-width: 480px) { 
    padding: 10px 10px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 5vw;

    @media (max-width: 768px) {
      width: 8vw; 
    }

    @media (max-width: 480px) {
      width: 10vw; 
    }
  }

  & h1 {
    font-size: 24px;
    font-weight: bold;
    margin: 0;

    @media (max-width: 768px) { 
      font-size: 20px; 
    }

    @media (max-width: 480px) { 
      font-size: 18px; 
    }
  }
`;

const Hamburger = styled.div`
  font-size: 24px; 
  cursor: pointer; 
  padding: 5px; 
  position: relative; 
`;

const DropdownContainer = styled.div`
  position: absolute; 
  right: 0; 
  margin-top: 10px; 
`;

const DropdownMenu = styled.div`
  background-color: #000; 
  border: 1px solid #52ff49; 
  border-radius: 5px; 
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5); 
  z-index: 1001; 
`;

const DropdownItem = styled.div`
  padding: 10px 20px; 
  color: white; 
  cursor: pointer; 
  width: 150px; 
`;
