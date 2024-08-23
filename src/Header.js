import React from 'react';
import './Header.css'; // Ensure this CSS file exists in the components folder
import Logo from './Assets/Logo_3.png'; // Updated path to match a common project structure

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <img src={Logo} alt="Little Lemon Logo" className="logo" />
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order-online">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
