/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders footer copyright', () => {
    render(<Footer />);
    const textElement = screen.getByText(/copyright/i);
    expect(textElement).toBeInTheDocument();
  });
});
