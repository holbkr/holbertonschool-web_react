import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from './Footer';
import AppContext from '../Context/context';
import { getCurrentYear, getFooterCopy } from '../utils/utils';

describe('Footer component', () => {
  test('renders copyright with default context (not logged in)', () => {
    render(
      <AppContext.Provider
        value={{
          user: { email: '', password: '', isLoggedIn: false },
          logOut: jest.fn(),
        }}
      >
        <Footer />
      </AppContext.Provider>
    );

    const year = getCurrentYear();
    const copy = getFooterCopy(true);
    const expectedText = `Copyright ${year} - ${copy}`;
    expect(screen.getByText(expectedText, { exact: false })).toBeInTheDocument();

    // Vérifie que le message de déconnexion n’apparaît pas
    expect(screen.queryByTestId('logoutSection')).not.toBeInTheDocument();
  });

  test('renders logout section when user is logged in', () => {
    const contextValue = {
      user: { email: 'test@mail.com', password: '12345678', isLoggedIn: true },
      logOut: jest.fn(),
    };

    render(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );

    const welcomeMessage = screen.getByText(/Welcome test@mail.com/i);
    expect(welcomeMessage).toBeInTheDocument();

    const logoutLink = screen.getByText('(logout)');
    expect(logoutLink).toBeInTheDocument();
  });

  test('calls logOut function when logout link is clicked', () => {
    const logOutMock = jest.fn();
    const contextValue = {
      user: { email: 'test@mail.com', password: '12345678', isLoggedIn: true },
      logOut: logOutMock,
    };

    render(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );

    const logoutLink = screen.getByText('(logout)');
    fireEvent.click(logoutLink);
    expect(logOutMock).toHaveBeenCalled();
  });
});
