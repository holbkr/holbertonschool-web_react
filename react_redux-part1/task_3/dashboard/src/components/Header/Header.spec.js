import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import authReducer, { login, logout } from '../../features/auth/authSlice';

// Crée un store Redux isolé pour le test
const renderWithRedux = (ui, { preloadedState, store = configureStore({ reducer: { auth: authReducer }, preloadedState }) } = {}) => {
  return render(<Provider store={store}>{ui}</Provider>);
};

describe('Header with Redux', () => {
  test('should not render logout section when not logged in', () => {
    renderWithRedux(<Header />, {
      preloadedState: {
        auth: { user: null, isLoggedIn: false },
      },
    });

    // The word "Welcome" should not appear when not logged in
    expect(screen.queryByText(/Welcome/)).toBeNull();
  });

  test('should render logout section with email when logged in', () => {
    renderWithRedux(<Header />, {
      preloadedState: {
        auth: { user: { email: 'user@example.com' }, isLoggedIn: true },
      },
    });

    expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
    expect(screen.getByText(/user@example.com/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /logout/i })).toBeInTheDocument();
  });

  test('should dispatch logout action when logout link is clicked', () => {
    const store = configureStore({
      reducer: { auth: authReducer },
      preloadedState: {
        auth: { user: { email: 'user@example.com' }, isLoggedIn: true },
      },
    });

    render(
      <Provider store={store}>
        <Header />
      </Provider>
    );

    const logoutLink = screen.getByRole('link', { name: /logout/i });
    fireEvent.click(logoutLink);

    const state = store.getState();
    expect(state.auth.isLoggedIn).toBe(false);
  });
});