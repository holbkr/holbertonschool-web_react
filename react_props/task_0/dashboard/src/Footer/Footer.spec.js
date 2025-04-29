/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

describe('Footer', () => {
  test('renders footer with correct year and text', () => {
    render(<Footer />);
    const year = getCurrentYear();
    const expectedText = `Copyright ${year} - ${getFooterCopy(false)}`; // false ici
    const footerElement = screen.getByText(expectedText, { exact: false }); // important si saut de ligne
    expect(footerElement).toBeInTheDocument();
  });
});
