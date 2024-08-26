// src/BookingForm.js
import React, { useState } from 'react';
import './BookingForm.css'; // Import the CSS for styling

const BookingForm = ({ availableTimes, onDateChange, onSubmit }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Handle date change
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    setTime(''); // Reset time selection
    onDateChange(selectedDate);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { date, time, guests, occasion };
    await onSubmit(formData);
    setSubmitted(true);
  };

  // Handle form reset
  const handleFormReset = () => {
    setDate('');
    setTime('');
    setGuests(1);
    setOccasion('');
    setSubmitted(false);
  };

  return (
    <div>
      {!submitted ? (
        <form className="booking-form" onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input 
            type="date" 
            id="res-date" 
            value={date}
            onChange={handleDateChange}
            required 
          />
          
          <label htmlFor="res-time">Choose time</label>
          <select 
            id="res-time" 
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          >
            <option value="">Select a time</option> {/* Default option */}
            {availableTimes.map((availableTime) => (
              <option key={availableTime} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </select>

          <label htmlFor="guests">Number of guests</label>
          <input 
            type="number" 
            id="guests" 
            placeholder="1" 
            min="1" 
            max="10" 
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            required 
          />

          <label htmlFor="occasion">Occasion</label>
          <select 
            id="occasion" 
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
            required
          >
            <option value="">Select an occasion</option> {/* Default option */}
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>

          <input 
            type="submit" 
            value="Make Your Reservation" 
            aria-label="Submit reservation form" // Label for screen readers
          />
        </form>
      ) : (
        <div className="confirmation-message">
          <h2>Thank you for your reservation!</h2>
          <p>Your booking has been confirmed.</p>
          <button id='book_again_b' onClick={handleFormReset}>Book Another Reservation</button>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
