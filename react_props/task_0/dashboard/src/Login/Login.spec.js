/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login', () => {
  test('renders 2 labels, 2 inputs and 1 button', () => {
    render(<Login />);
    expect(screen.getAllByLabelText(/Email|Password/)).toHaveLength(2);
    expect(screen.getAllByRole('textbox')).toHaveLength(1); // email
    expect(screen.getAllByLabelText(/Password/)).toHaveLength(1); // password
    expect(screen.getByRole('button', { name: /ok/i })).toBeInTheDocument();
  });

  test('focuses input when label is clicked', async () => {
    render(<Login />);
    const user = userEvent.setup();
    const emailLabel = screen.getByLabelText(/email/i);
    await user.click(emailLabel);
    expect(emailLabel).toHaveFocus(); // Note: might need refactor if label isn't "for" input
  });
});
