import React from 'react';
import './HeroSection.css'; // Import the CSS file for styling
import HeroImg from './Assets/Hero_img.png'; // Path to image from the components folder

const myHeroSection = () => {
  return (
    <div className="container">
      <div className="text-content">
        <p id="r_name">Little Lemon</p>
        <p id="r_location">Chicago</p>
        <p id="description">Little Lemon is a warm and welcoming family-run Mediterranean restaurant, where tradition meets flavor in every dish. Nestled in a cozy setting, this charming eatery offers a vibrant menu filled with fresh, authentic Mediterranean cuisine, prepared with love and the finest ingredients. From zesty lemon-infused dishes to rich olive oils and aromatic herbs, every meal at Little Lemon is a delightful journey to the heart of the Mediterranean, perfect for family gatherings or a casual night out.</p>
        <button>Book a table</button>
      </div>
      <div className="image-container">
        <img src={HeroImg} alt="Hero_Img" />
      </div>
    </div>
  );
};

export default myHeroSection;
