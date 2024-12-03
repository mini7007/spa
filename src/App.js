import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import ContactUs from './ContactUs/ContactUs';
import Services from './Services/Services';
import AboutUs from './AboutUs/AboutUs';
import HeroSection from './HeroSection/HeroSection';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="Home" className="section">
        <HeroSection />
      </div>
      <div id="AboutUs" className="section">
        <AboutUs />
      </div>
      <div id="Services" className="section">
        <Services />
      </div>
      <div id="ContactUs" className="section">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
}

export default App;