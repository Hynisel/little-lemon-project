import React from 'react';
import './Highlights.css';
import salad from './Assets/Salad.png';
import bruschetta from './Assets/Bruschetta.png';
import lemond from './Assets/Lemon_Dessert.png';
import { useNavigate } from 'react-router-dom';

const Highlights = () => {

  const navigate = useNavigate();

   const handleNavigation = () => {
    navigate('/Menu');
   };

  return (
    <><div className="highlights-header">
      <p>Specials</p>
    <button onClick={handleNavigation}>Online Menu</button>
    </div>
    <div className="highlights-container">
      <div className="highlight-column">
        <img src={salad} alt="First_m" />
        <p className='dish_name'>Greek Salad</p>
        <p>A classic Mediterranean dish, Greek Salad is a refreshing mix of crisp cucumbers, juicy tomatoes, red onions, and Kalamata olives, all topped with crumbly feta cheese. It's typically dressed with olive oil, a dash of red wine vinegar, and sprinkled with oregano, making it a vibrant and healthy choice that captures the essence of Greek cuisine.</p>
      </div>
      <div className="highlight-column">
        <img src={bruschetta} id="brus_b" alt="Second_m" />
        <p className='dish_name'>Bruschetta</p>
        <p>Bruschetta is a popular Italian appetizer featuring slices of grilled bread rubbed with garlic and drizzled with extra-virgin olive oil. The most traditional version is topped with fresh tomatoes, basil, and a hint of balsamic vinegar, creating a perfect balance of flavors that is both simple and delicious.</p>
      </div>
      <div className="highlight-column">
        <img src={lemond} id="Lemon_d" alt="Third_m" />
        <p className='dish_name'>Lemon Cake</p>
        <p id="lemon_text">Lemon Cake is a light and zesty dessert with a tender crumb,infused with fresh lemon zest and juice. Often finished with a tangy lemon glaze or frosting, this cake offers a refreshing citrus flavor that's both sweet and tart, making it an ideal treat for any occasion.</p>
      </div>
    </div></>
  );
};

export default Highlights;
