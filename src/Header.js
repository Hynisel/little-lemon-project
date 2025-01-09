import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Logo from './Assets/Logo_3.png';

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src={Logo} alt="Little Lemon Logo" className="logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/booking">Reservations</Link>
            </li>
            <li>
              <Link to="#login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
