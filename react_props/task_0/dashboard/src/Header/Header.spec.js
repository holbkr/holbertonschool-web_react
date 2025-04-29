/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('renders logo image', () => {
    render(<Header />);
    const logo = screen.getByAltText(/holberton logo/i);
    expect(logo).toBeInTheDocument();
  });

  test('renders h1 with correct text', () => {
    render(<Header />);
    const heading = screen.getByText(/School dashboard/i);
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
  });
});
