import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';

const ImageSlider = ({ images = [] }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, [images.length]);

    useEffect(() => {
        const interval = setInterval(nextSlide, 2000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    if (!images || images.length === 0) {
        return <div>No images available</div>;
    }

    return (
        <Slider>
            <Arrow className="left" onClick={prevSlide}>❮</Arrow>
            <SlideImage src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            <Arrow className="right" onClick={nextSlide}>❯</Arrow>
        </Slider>
    );
};

export default ImageSlider;


const Slider = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    borders: 1px solid #ccc; 
    border-radius: 5px; 
    box-shadow: 0 2px 5px rgba(177, 175, 175, 0.5)
`;

const SlideImage = styled.img`
    width: 100%;
    height: auto;
`;

const Arrow = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 10;

    &.left {
        left: 10px;
    }

    &.right {
        right: 10px;
    }
`;
