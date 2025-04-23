import React from 'react'; // ← cette ligne manquait
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main heading', () => {
  render(<App />);
  const heading = screen.getByText(/School dashboard/i);
  expect(heading).toBeInTheDocument();
});
