import React from 'react';
import './Footer.css';
import logoImage from './Assets/Logo_5.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-left">
          <img src={logoImage} alt="Little Lemon Logo" className="footer-logo" />
        </div>
        <div className="footer-right">
          <div className="footer-column">
            <h4>Doormat</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#reservation">Reservation</a></li>
              <li><a href="#order-online">Order Online</a></li>
              <li><a href="#login">Login</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li><p>No Adress 28</p></li>
              <li><p>Chicago,IL</p></li>
              <li><p>555-5555-555</p></li>
              <li><p>little-lemon-enquiries@gmail.com</p></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Social Media</h4>
            <ul>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#twitter">X</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Little Lemon. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
