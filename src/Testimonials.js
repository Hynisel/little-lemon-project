import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">Testimonials</h2>
      <div className="testimonials-grid">
        <div className="testimonial-frame">
          <p className='name_p'>James Smith</p>
          <p>An incredible dining experience! The dishes are fresh and flavorful, with a wonderful selection of wines. Service was a bit slow, but worth the wait.</p>
          <p className='rating_p'>4.5 Stars</p>
        </div>
        <div className="testimonial-frame">
          <p className='name_p'>Emily Johnson</p>
          <p>Absolutely loved it! The ambiance was cozy and the staff was very welcoming. The lemon cake was out of this world. Highly recommend!</p>
          <p className='rating_p'>5 Stars</p>
        </div>
        <div className="testimonial-frame">
          <p className='name_p'>Michael Clark</p>
          <p>Great place for a casual meal. The Greek salad was fresh and vibrant. Prices are reasonable and the service is friendly. Will definitely be back!</p>
          <p className='rating_p'>4 Stars</p>
        </div>
        <div className="testimonial-frame">
          <p className='name_p'>Sarah Thompson</p>
          <p>An exceptional dining experience! The bruschetta was perfectly seasoned and the staff made us feel right at home. A must-visit for anyone who appreciates great food and a warm atmosphere.</p>
          <p className='rating_p'>5 Stars</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
