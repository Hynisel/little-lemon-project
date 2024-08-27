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

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <MyHeroSection />
            <Highlights />
            <Testimonials />
            <About />
          </>
        } />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
