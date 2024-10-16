import React from 'react';
import styled from 'styled-components';
import Field from '../assets/field.png'

const BackgroundImageText = () => {
    return (
        <BackgroundContainer>
            <Overlay>
                <h1>BUDU ELITES</h1>
                <p></p>
            </Overlay>
        </BackgroundContainer>
    );
};

export default BackgroundImageText;

const BackgroundContainer = styled.div`
    background-image: url(${Field});
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: white;
    text-align: center;
    box-sizing: border-box;
        borders: 1px solid #ccc; 
    border-radius: 5px; 
    box-shadow: 0 2px 5px rgba(177, 175, 175, 0.5)
`;

const Overlay = styled.div`
    padding: 20px;
    border-radius: 10px;
`;
