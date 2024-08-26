import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';
import './BookingPage.css'; // Import the CSS file

const BookingPage = () => {
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [submissionResult, setSubmissionResult] = useState('');

  useEffect(() => {
    if (selectedDate) {
      fetchAvailableTimes(new Date(selectedDate));
    } else {
      const today = new Date();
      setSelectedDate(today.toISOString().split('T')[0]); // Set default date in yyyy-mm-dd format
      fetchAvailableTimes(today);
    }
  }, [selectedDate]);

  const fetchAvailableTimes = async (date) => {
    if (window.fetchAPI) {
      try {
        const times = await window.fetchAPI(date);
        setAvailableTimes(times);
      } catch (error) {
        console.error('Failed to fetch available times:', error);
      }
    } else {
      console.error('fetchAPI function is not available');
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSubmit = async (formData) => {
    if (window.submitAPI) {
      try {
        const result = await window.submitAPI(formData);
        if (result) {
          setSubmissionResult('');
        } else {
          setSubmissionResult('');
        }
      } catch (error) {
        console.error('Failed to submit booking:', error);
        setSubmissionResult('Booking failed!');
      }
    } else {
      console.error('submitAPI function is not available');
    }
  };

  return (
    <div className="booking-page">
      <h1>Book a Table</h1>
      <BookingForm 
        availableTimes={availableTimes} 
        onDateChange={handleDateChange}
        onSubmit={handleSubmit}
        selectedDate={selectedDate} // Pass the selected date to BookingForm if needed
      />
      {submissionResult && <p className="submission-result">{submissionResult}</p>}
    </div>
  );
};

export default BookingPage;
