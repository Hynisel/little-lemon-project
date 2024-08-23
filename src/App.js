// src/App.js
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
      <section id="home">
        <MyHeroSection />
      </section>
      <section id="highlights">
        <Highlights />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="about">
        <About />
      </section>
      <Footer />
    </div>
  );
}

export default App;
