import React from 'react';
import { render, screen } from '@testing-library/react';
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

    // Le message de logout ne doit pas s'afficher
    expect(screen.queryByText(/Welcome/i)).not.toBeInTheDocument();
  });
});
