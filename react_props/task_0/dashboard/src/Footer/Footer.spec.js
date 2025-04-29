/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders footer content', () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });
});
