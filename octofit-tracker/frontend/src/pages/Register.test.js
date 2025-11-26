import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Register from './Register';

test('renders register form', () => {
  render(<MemoryRouter><Register /></MemoryRouter>);
  expect(screen.getByText(/Register/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Register/i })).toBeInTheDocument();
});
