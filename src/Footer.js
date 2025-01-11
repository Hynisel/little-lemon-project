import React from 'react';
import './Footer.css';
import logoImage from './Assets/Logo_5.png';
import { Link } from 'react-router-dom';

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
            <nav className='list_footer'>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
              </ul>
            </nav>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li><p>No Adress 28</p></li>
              <li><p>Chicago, IL</p></li>
              <li><p>555-5555-555</p></li>
              <li><p>l-lemon@!mail.com</p></li>
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
          <div className="footer-column">
            <h4>Opening Hours</h4>
            <p>Monday: Closed</p>
            <p>Tuesday - Sunday: 17:00 - 23:30</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Little Lemon. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
