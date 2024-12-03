import React, { useEffect, useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
        },
        (error) => {
          console.log("Error getting location", error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="contact-us">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you. Reach out for any inquiries or feedback.</p>
      </div>
      <div className="contact-content">
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Submit</button>
        </div>
        {location && (
          <div className="map">
            <iframe
              title="Current Location"
              src={`https://www.google.com/maps?q=${location.latitude},${location.longitude}&z=15&output=embed`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
      <div className="social-icons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
