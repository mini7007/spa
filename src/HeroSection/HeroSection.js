import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  // Slider image state
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://pixabay.com/get/gc1f3c83a820ab45d120e084f9d21c762b737b76e77f93aaea77c40016b5a2bed280a6647cbce13ab426ae70e8ef56903a7969a1236eb9a39d9073a221f5ac0b1_1280.jpg',
    'https://pixabay.com/get/g188f115b97daad715da0e5c8b56e4476060bdde8e6a876324cf34d82f6dc4f61dc29674adf51649fb6f567c59d367d3dac9fd6b611c3bb4482a70bbd70031607_1280.jpg',
    'https://pixabay.com/get/g17e7fbfda57c69a6cbcd69a3421a126bce28033ca249ace489b0930a6f81862399b39bea64f0fa39c4cde510eb73edd9526c0d358b3ed9166af0ae73521dd9b6_1280.jpg',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="hero-section">
      {/* Slider */}
      <div className="slider">
        <img src={images[currentSlide]} alt="slider" className="slider-image" />
      </div>

      {/* Overlay Text */}
      <div className="overlay-text">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to success begins here. Explore our services and discover more!</p>
        <a href="#services" className="explore-link">Explore Now</a>
      </div>
    </div>
  );
}

export default HeroSection;
