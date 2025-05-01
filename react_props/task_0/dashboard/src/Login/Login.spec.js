/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';

describe('Login', () => {
  test('renders 2 labels, 2 inputs and 1 button', () => {
    render(<Login />);
    const labels = screen.getAllByLabelText(/email|password/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const button = screen.getByRole('button', { name: /ok/i });

    expect(labels.length).toBe(2);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('focus input when clicked', async () => {
    render(<Login />);
    const user = userEvent.setup();
    const emailInput = screen.getByLabelText(/email/i);
    await user.click(emailInput);
    expect(emailInput).toHaveFocus();
  });
});
