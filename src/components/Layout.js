import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar'; 
import MainBody from './MainBody'; 

const Layout = () => {
  return (
    <Content>
      <SideBar />
      <MainBody />
    </Content>
  );
};

export default Layout;

const Content = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: 768px) {
      flex-direction: column;
  }
`;
