import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('App component', () => {
  test('renders header, login and footer components', () => {
    render(<App isLoggedIn={false} />);
    expect(screen.getByText(/School dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Login to access the full dashboard/i)).toBeInTheDocument();
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });

  test('calls logOut and alerts when Ctrl + H is pressed', () => {
    const logOutMock = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});

    render(<App logOut={logOutMock} />);

    fireEvent.keyDown(document, {
      key: 'h',
      ctrlKey: true,
    });

    expect(alertMock).toHaveBeenCalledWith('Logging you out');
    expect(logOutMock).toHaveBeenCalledTimes(1);

    alertMock.mockRestore();
  });

  test('displays "Course list" when isLoggedIn is true', () => {
    render(<App isLoggedIn={true} />);
    expect(screen.getByText(/Course list/i)).toBeInTheDocument();
  });

  test('displays "Log in to continue" when isLoggedIn is false', () => {
    render(<App isLoggedIn={false} />);
    expect(screen.getByText(/Log in to continue/i)).toBeInTheDocument();
  });

  test('displays News from the School and its paragraph', () => {
    render(<App />);
    expect(screen.getByText(/News from the School/i)).toBeInTheDocument();
    expect(screen.getByText(/Holberton School News goes here/i)).toBeInTheDocument();
  });
});

describe('App notification drawer behavior', () => {
  test('displays drawer when clicking on "Your notifications"', () => {
    render(<App />);
    const menuItem = screen.getByText(/your notifications/i);
    fireEvent.click(menuItem);
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
  });

  test('hides drawer when clicking on close button', () => {
    render(<App />);
    // Ouvrir le drawer
    fireEvent.click(screen.getByText(/your notifications/i));
    // Cliquer sur le bouton de fermeture
    const closeBtn = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeBtn);
    // Vérifier que le panneau a disparu
    expect(screen.queryByText(/Here is the list of notifications/i)).not.toBeInTheDocument();
  });
});
