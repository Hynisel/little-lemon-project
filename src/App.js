import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Testimonials from './Testimonials';
import MyHeroSection from './HeroSection';
import Highlights from './Highlights';
import About from './About';
import BookingPage from './BookingPage.js';
import Menu from './Menu.js';

const App = () => {
  return (
    <Router basename="/little-lemon-project">
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <MyHeroSection />
            <Highlights />
            <Testimonials />
          </>
        } />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
