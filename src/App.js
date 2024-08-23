import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Testimonials from './Testimonials';
import MyHeroSection from './HeroSection';
import Highlights from './Highlights';
import About from './About';

function App() {
  return (
    <div>
      <Header />
      <MyHeroSection />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </div>
  );
}

export default App;


// <Main /> {/* Placed Main between Header and Footer */} 