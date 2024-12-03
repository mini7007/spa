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
        
        
        <div className="about-images">
          <img src="https://ik.imagekit.io/Myimage/Team1.jpg?updatedAt=1733227269318" alt="Team 1" className="team-image" />
          <img src="https://ik.imagekit.io/Myimage/Team2.jpg?updatedAt=1733227269325" alt="Team 2" className="team-image" />
          <img src="https://ik.imagekit.io/Myimage/Team3.jpg?updatedAt=1733227269337" alt="Team 3" className="team-image" />
          <img src="https://ik.imagekit.io/Myimage/Team4.jpg?updatedAt=1733227269333" alt="Team 3" className="team-image" />

        </div>
      </div>
    </div>
  );
}

export default AboutUs;
