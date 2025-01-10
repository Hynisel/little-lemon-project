import React from 'react';
import './Menu.css';
import salad from './Assets/Salad.png';
import bruschetta from './Assets/Bruschetta.png';
import lemond from './Assets/Lemon_Dessert.png';
import margherita from './Assets/Pizza_margherita.jpg';

const Menu = () => {
  const dishes = [
    {
        name: 'Greek Salad',
        description: "A classic Mediterranean dish, Greek Salad is a refreshing mix of crisp cucumbers, juicy tomatoes, red onions, and Kalamata olives, all topped with crumbly feta cheese. It's typically dressed with olive oil, a dash of red wine vinegar, and sprinkled with oregano, making it a vibrant and healthy choice that captures the essence of Greek cuisine.",
        price: '€10.00',
        image: salad,
      },
      {
        name: 'Bruschetta',
        description: 'Bruschetta is a popular Italian appetizer featuring slices of grilled bread rubbed with garlic and drizzled with extra-virgin olive oil. The most traditional version is topped with fresh tomatoes, basil, and a hint of balsamic vinegar, creating a perfect balance of flavors that is both simple and delicious.',
        price: '€8.00',
        image: bruschetta,
      },
    {
      name: 'Lemon Cake',
      description: "Lemon Cake is a light and zesty dessert with a tender crumb,infused with fresh lemon zest and juice. Often finished with a tangy lemon glaze or frosting, this cake offers a refreshing citrus flavor that's both sweet and tart, making it an ideal treat for any occasion.",
      price: '€5.50',
      image: lemond,
    },
    {
      name: 'Margherita Pizza',
      description: 'Pizza topped with fresh tomatoes, mozzarella cheese, and basil.',
      price: '€12.00',
      image: margherita,
    },
  ];

  return (
    <div className="menu-container">
      <header className="menu-header">
        <h1>Restaurant Menu</h1>
        <h2>Delicious Dishes</h2>
      </header>
      <div className="menu-content">
        {dishes.map((dish, index) => (
          <div key={index} className="menu-item">
            <img src={dish.image} alt={dish.name} className="dish-image" />
            <div className="dish-details">
              <h3 className="dish-name">{dish.name}</h3>
              <p className="dish-description">{dish.description}</p>
              <p className="dish-price">{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
