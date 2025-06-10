// src/pages/Login/Login.spec.js
import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProvider } from '../../tests/test-utils';
import Login from './Login';

describe('Login component', () => {
  test('renders form elements correctly', () => {
    renderWithProvider(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(passwordInput).toBeInTheDocument();
    expect(passwordInput).toHaveAttribute('type', 'password');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toBeDisabled();
  });

  test('email input receives focus when label clicked', async () => {
    renderWithProvider(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const emailLabel = screen.getByText(/email/i);

    userEvent.click(emailLabel);

    await waitFor(() => {
      expect(emailInput).toHaveFocus();
    });
  });

  test('password input receives focus when label clicked', async () => {
    renderWithProvider(<Login />);

    const passwordInput = screen.getByLabelText(/password/i);
    const passwordLabel = screen.getByText(/password/i);

    userEvent.click(passwordLabel);

    await waitFor(() => {
      expect(passwordInput).toHaveFocus();
    });
  });

  test('submit button is enabled with valid credentials', () => {
    renderWithProvider(<Login />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /ok/i });

    // Button should be disabled initially
    expect(submitButton).toBeDisabled();

    // Simulate user typing valid credentials
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: '12345678' } });

    expect(submitButton).toBeEnabled();
  });
});
