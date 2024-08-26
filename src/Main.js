import React, { useReducer } from 'react';
import BookingForm from './BookingForm';
import './Main.css';

// Step 2: Define the reducer and initialize functions
const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']; // Initial available times
};

const updateTimes = (state, action) => {
  // For now, we return the same times regardless of the date
  //this function can return different times based on the action.date
  return state;
};

const Main = () => {
  // Step 2: Convert availableTimes to a reducer
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <div className="main-container">
      {/* Step 1: Pass state and dispatch function to BookingForm as props */}
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};

export default Main;
