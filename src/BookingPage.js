import React from 'react';
import './BookingPage.css'; // Import the CSS for styling
import BookingForm from './BookingForm'; // Import the BookingForm component

const BookingPage = () => {
  return (
    <div className="booking-page">
      <h1>Make a Reservation</h1>
      <BookingForm />
    </div>
  );
};

export default BookingPage;