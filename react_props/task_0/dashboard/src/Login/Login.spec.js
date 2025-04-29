/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  test('renders login form', () => {
    render(<Login />);
    expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email:/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /OK/i })).toBeInTheDocument();
  });
});
