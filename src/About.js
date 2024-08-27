
import React from 'react';
import './About.css';
import ownerImage1 from './Assets/owner1.jpg';
import ownerImage2 from './Assets/owner2.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="text-section">
      <p id="tittle_t">Little Lemon</p>
      <p id="tittle_l">Chicago</p>
        <p>Welcome to our restaurant! We pride ourselves on delivering the finest Mediterranean cuisine in a welcoming atmosphere.</p>
        <p>Our team is dedicated to providing excellent service and ensuring every meal is a memorable experience.</p>
        <p>Meet the owners, who are passionate about food and hospitality, committed to making your dining experience exceptional.</p>
        <p>Max and Alex.</p>
      </div>
      <div className="image-section">
        <div className="image-container">
          <img src={ownerImage1} alt="Owner 1" className="owner-image image-1" />
          <img src={ownerImage2} alt="Owner 2" className="owner-image image-2" />
        </div>
      </div>
    </div>
  );
};

export default About;
