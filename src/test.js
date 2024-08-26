// src/App.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('initially displays number 1', () => {
    render(<App />);
    const numberElement = screen.getByTestId('currentNumber');
    expect(numberElement).toHaveTextContent('1');
  });

  test('increments number when button is clicked', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('add-one');
    const numberElement = screen.getByTestId('currentNumber');
    
    fireEvent.click(buttonElement);
    expect(numberElement).toHaveTextContent('2');
  });
});
