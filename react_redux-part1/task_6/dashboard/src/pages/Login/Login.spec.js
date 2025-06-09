// src/pages/Login/Login.spec.js
import { fireEvent, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProvider } from '../../tests/test-utils';
import Login from './Login';



test('Testing signin form elements', () => {
  renderWithProvider(<Login />);
  const emailInput = screen.getByRole('textbox');
  const passwordInput = screen.getByLabelText(/password/i);
  const submitButton = screen.getByRole('button', { name: 'OK' });
  expect(emailInput).toBeInTheDocument();
  expect(emailInput).toHaveAttribute('type', 'email');
  expect(passwordInput).toBeInTheDocument();
  expect(passwordInput).toHaveAttribute('type', 'password');
  expect(submitButton).toBeInTheDocument();
  expect(submitButton).toBeDisabled();
});

test('Should focus email input on label click', async () => {
  renderWithProvider(<Login />);
  const emailInput = screen.getByLabelText('Email');
  const emailLabel = screen.getByText('Email');
  userEvent.click(emailLabel);
  await waitFor(() => {
    expect(emailInput).toHaveFocus();
  });
});

test('Should focus password input on label click', async () => {
  renderWithProvider(<Login />);
  const passwordInput = screen.getByLabelText('Password');
  const passwordLabel = screen.getByText('Password');
  userEvent.click(passwordLabel);
  await waitFor(() => {
    expect(passwordInput).toHaveFocus();
  });
});

test('Submit button enables only with valid credentials', () => {
  renderWithProvider(<Login />);
  const emailInput = screen.getByLabelText('Email');
  const passwordInput = screen.getByLabelText('Password');
  const submitButton = screen.getByRole('button', { name: /ok/i });

  expect(submitButton).toBeDisabled();

  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: '12345678' } });

  expect(submitButton).not.toBeDisabled();
});
