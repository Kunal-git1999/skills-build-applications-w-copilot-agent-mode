import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders site header', () => {
  render(<App />);
  expect(screen.getByText(/Octofit Tracker/i)).toBeInTheDocument();
});
