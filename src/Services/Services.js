import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Health & Wellness',
      description: 'Providing wellness programs focused on physical and mental health, from yoga to nutrition.',
      image: 'https://ik.imagekit.io/Myimage/Health%20and%20welness.jpg?updatedAt=1733226769559',
    },
    {
      title: 'Sustainability',
      description: 'Our eco-friendly services focus on sustainable practices and reducing environmental footprints.',
      image: 'https://ik.imagekit.io/Myimage/Sustainability.jpg?updatedAt=1733226769700',
    },
    {
      title: 'Eco-Friendly Products',
      description: 'We offer a range of eco-friendly products that help conserve resources and promote greener living.',
      image: 'https://ik.imagekit.io/Myimage/Eco%20friendly%20products.jpg?updatedAt=1733226769720',
    },
    {
      title: 'Community Engagement',
      description: 'We believe in building stronger communities through eco-conscious initiatives and wellness programs.',
      image: 'https://ik.imagekit.io/Myimage/Community%20engagement.jpg?updatedAt=1733226769563',
    },
  ];

  return (
    <div className="services">
      <div className="services-header">
        <h2>Our Services</h2>
        <p>We offer services that nurture both human well-being and the environment. Explore our offerings below.</p>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
