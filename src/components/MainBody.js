import React from 'react';
import ImageSlider from './ImageSlider';
import BackgroundImageText from './BackgroundImageText';
import styled from 'styled-components';
import Img1 from '../assets/image6.jpg';
import Img2 from '../assets/image7.jpg';
import Img3 from '../assets/image8.jpg';
import Img4 from '../assets/image4.jpg';
import Img5 from '../assets/image5.jpg';
import Img6 from '../assets/image9.jpg';
import Img7 from '../assets/image10.jpg';
import Img8 from '../assets/image11.jpg';
import SportNews from './SportNews';
import BlogPage from './BlogPost';

const MainBody = () => {
    const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8];
    return (
        <MainBodyOfContent>
            <Container>
                <Half>
                    <ImageSlider images={images} />
                </Half>
                <Half>
                    <BackgroundImageText />
                </Half>
            </Container>
            <SportNews /> 
            <BlogPage/>
        </MainBodyOfContent>
    );
};

export default MainBody;

const MainBodyOfContent = styled.div`
    display: flex;
    flex-direction: column; 
    width: 100%; 
`;

const Container = styled.div`
    display: flex;
    flex: 0 0 85%; 
    padding: 10px;
    box-sizing: border-box; 
    border: 1px solid #ccc; 
    border-radius: 5px; 
    box-shadow: 0 2px 5px rgba(177, 175, 175, 0.5);
    max-height: 450px
`;

const Half = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px; /* Adjusted margin */
    box-sizing: border-box; 
    min-height: 0;
    border: 1px solid #ccc; 
    border-radius: 5px; 
    box-shadow: 0 1px 3px rgba(177, 175, 175, 0.3);
    
    @media (max-width: 768px) {
        min-height: 200px; 
    }

    @media (max-width: 480px) {
        min-height: 150px; 
    }
`;
