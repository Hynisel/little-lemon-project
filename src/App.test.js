import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import BookingPage from './BookingPage';

test('renders BookingPage component at /booking route', async () => {
  render(
    <MemoryRouter initialEntries={['/booking']}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </MemoryRouter>
  );


  await waitFor(() => {
    const bookingPageElement = screen.getByText(/Make a Reservation/i); // Adjust based on actual text in BookingPage
    expect(bookingPageElement).toBeInTheDocument();
  });
});
