/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('renders logo and title', () => {
    render(<Header />);
    const logo = screen.getByAltText(/holberton logo/i);
    const title = screen.getByText(/School dashboard/i);

    expect(logo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });
});
