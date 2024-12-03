import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://ik.imagekit.io/Myimage/slider1.jpg?updatedAt=1733227039832',
    'https://ik.imagekit.io/Myimage/Slider2.jpg?updatedAt=1733227039929',
    'https://ik.imagekit.io/Myimage/Slider3.jpg?updatedAt=1733227039874',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [images.length]);

  return (
    <div className="hero-section">
      
      <div className="slider">
        <img src={images[currentSlide]} alt="slider" className="slider-image" />
      </div>

      
      <div className="overlay-text">
        <h1>Welcome to Our Website</h1>
        <p>Your journey to success begins here. Explore our services and discover more!</p>
        <a href="#services" className="explore-link">Explore Now</a>
      </div>
    </div>
  );
}

export default HeroSection;
