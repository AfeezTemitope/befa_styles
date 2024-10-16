import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <SidebarContainer>
            <h2>Sidebar</h2>  
            <Button onClick={() => handleNavigate('/pl-matches')}>
                PL Live Matches
            </Button>
        </SidebarContainer>
    );
};

export default SideBar;


const SidebarContainer = styled.div`
    width: 15%;
    background-color: #f4f4f4;
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0,0,0,0.7);
`;

const Button = styled.button`
    display: block;
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    background-color: green;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: left;

    &:hover {
        background-color: #0056b3;
    }
`;
