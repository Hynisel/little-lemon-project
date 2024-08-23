import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main'; // Corrected import path

function App() {
  return (
    <div>
      <Header />
      <Main /> {/* Placed Main between Header and Footer */}
      <Footer />
    </div>
  );
}

export default App;
