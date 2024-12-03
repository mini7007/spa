import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-header">
        <h2>About Us</h2>
        <p>We are a passionate team dedicated to delivering the best solutions for your business. Let us help you succeed.</p>
      </div>
      
      <div className="about-us-content">
        {/* Left Column: Text About the Company */}
        <div className="about-text">
          <h3>Our Mission</h3>
          <p>
            We strive to deliver innovative solutions that meet the evolving needs of our clients. Our team works
            tirelessly to provide exceptional services that drive success and create lasting value for businesses across
            industries.
          </p>
          <h3>Our Values</h3>
          <ul>
            <li>Integrity: We believe in doing the right thing at all times.</li>
            <li>Innovation: We embrace new ideas to solve complex problems.</li>
            <li>Collaboration: We work together to achieve common goals.</li>
          </ul>
        </div>
        
        {/* Right Column: Team Images */}
        <div className="about-images">
          <img src="https://pixabay.com/get/g08f849ef9f057737f373aabddf4f9571485f070debe999c4ab84ab1cd886ff8473ea5e7cc144ee3f23acc74c8e71048e51a5b53afd3bccba1fb8262bd7e80de0_1280.jpg" alt="Team 1" className="team-image" />
          <img src="https://pixabay.com/get/gf86e8494329b31d87be53ad3f490d062e580204fa965e79371dc1b990d9c367a1731fb45f579d67f0a8812ba157b66c2e2d695017ec7edec85b33497cb74838b_1280.jpg" alt="Team 2" className="team-image" />
          <img src="https://pixabay.com/get/g5922d4c53f2fd3033d87002563027946fd93964a469b2451fb4694a17ba009c236b2725bbbcace70f6e645538574381aa33a7c89a9fe5445a70362970575f907_1280.jpg" alt="Team 3" className="team-image" />
          <img src="https://pixabay.com/get/gbc2fc7015ed32115300965a101284c5ccf200a3fbbc21b5be6bf2db51a3b8fb922e4c9ff77c3cbb6058f991ab38f6de69f3429573131f96ec107e468f34a40fb_1280.jpg" alt="Team 3" className="team-image" />

        </div>
      </div>
    </div>
  );
}

export default AboutUs;
