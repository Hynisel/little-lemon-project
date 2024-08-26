import React from 'react';
import './BookingPage.css'; // Import the CSS for styling
import Main from './Main'; // Import Main which includes the BookingForm

const BookingPage = () => {
  return (
    <div className="booking-page">
      <h1>Make a Reservation</h1>
      <Main /> {/* Main will handle the rendering of BookingForm */}
    </div>
  );
};

export default BookingPage;
