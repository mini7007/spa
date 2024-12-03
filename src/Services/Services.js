import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Health & Wellness',
      description: 'Providing wellness programs focused on physical and mental health, from yoga to nutrition.',
      image: 'https://pixabay.com/get/gb4babddb5df08be496d188c9ecf8f2d4e2216bd981b224cf5b4c05c74884d3a43e96802686225f48f21f06a0088acff53954a21094cc4af8ef0597e897c39d17_1280.jpg',
    },
    {
      title: 'Sustainability',
      description: 'Our eco-friendly services focus on sustainable practices and reducing environmental footprints.',
      image: 'https://pixabay.com/get/g002f51cacc6b9f3a1a2e14c1e53dd5db72b50a1c431428b5a4a08f9523234d9dd3163c3fa330949f5e7d098a155faf848feb5baaba445aa975a4a6eadcedc8a4_1280.jpg',
    },
    {
      title: 'Eco-Friendly Products',
      description: 'We offer a range of eco-friendly products that help conserve resources and promote greener living.',
      image: 'https://pixabay.com/get/g00c815a616a2c99ceb826fb49443c910afa12c33a98cc7084e1cb80946bc0d4166f0d098d5c30c2e5676de9dd058687a_1280.jpg',
    },
    {
      title: 'Community Engagement',
      description: 'We believe in building stronger communities through eco-conscious initiatives and wellness programs.',
      image: 'https://pixabay.com/get/gdb1346b772b12014e9124a7fdc6b8a279948b600bea4e31a32aab9855d038c37512a97880107bd864950bcd387aca51b6cc5cfe4c7b8a65b1dce2021dcab80d0_1280.jpg',
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
