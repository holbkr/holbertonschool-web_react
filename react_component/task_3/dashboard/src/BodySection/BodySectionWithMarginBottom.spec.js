import React from 'react';
import { render, screen } from '@testing-library/react';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';

describe('BodySectionWithMarginBottom', () => {
  test('renders a div with class bodySectionWithMargin', () => {
    const { container } = render(
      <BodySectionWithMarginBottom title="Margin Title">
        <p>Some content</p>
      </BodySectionWithMarginBottom>
    );
    expect(container.firstChild).toHaveClass('bodySectionWithMargin');
  });

  test('renders the BodySection component inside', () => {
    render(
      <BodySectionWithMarginBottom title="Test Section">
        <p>Child element</p>
      </BodySectionWithMarginBottom>
    );
    expect(screen.getByText('Test Section')).toBeInTheDocument();
    expect(screen.getByText('Child element')).toBeInTheDocument();
  });
});
