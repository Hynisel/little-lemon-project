import React, { useState } from 'react';
import './BookingForm.css'; // Import the CSS for styling

const BookingForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    setSubmitted(true);    // Set the submitted state to true
  };

  return (
    <div>
      {!submitted ? (
        <form className="booking-form" onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" required />
          
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" required />

          <label htmlFor="occasion">Occasion</label>
          <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

          <input type="submit" value="Make Your Reservation" />
        </form>
      ) : (
        <div className="confirmation-message">
          <h2>Thank you for your reservation!</h2>
          <p>Your booking has been confirmed.</p>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
