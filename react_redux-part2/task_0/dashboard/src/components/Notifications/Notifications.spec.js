import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Notifications from './Notifications';
import { getLatestNotification } from '../../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';
import { markAsRead } from '../../redux/notificationSlice';

const mockStore = configureStore([]);

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const renderWithRedux = (ui, { initialState } = {}) => {
  const store = mockStore(initialState);
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};

const mockNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', value: getLatestNotification() },
];

describe('Notifications component', () => {
  test('Displays "No new notifications" when list is empty', () => {
    renderWithRedux(<Notifications />, {
      initialState: {
        notifications: {
          notifications: [],
        },
      },
    });

    fireEvent.click(screen.getByText(/your notifications/i));
    expect(screen.getByText(/no new notifications for now/i)).toBeInTheDocument();
  });

  test('Toggle visibility class on drawer when clicking on title and close button', () => {
    renderWithRedux(<Notifications />, {
      initialState: {
        notifications: {
          notifications: mockNotifications,
        },
      },
    });

    const title = screen.getByText(/your notifications/i);
    fireEvent.click(title);

    const drawer = screen.getByText(/here is the list of notifications/i).parentElement;
    expect(drawer.className).not.toMatch(/visible/);

    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(drawer.className).toMatch(/visible/);
  });

  test('Clicking a notification dispatches markAsRead with correct ID', () => {
    const { store } = renderWithRedux(<Notifications />, {
      initialState: {
        notifications: {
          notifications: mockNotifications,
        },
      },
    });

    fireEvent.click(screen.getByText(/your notifications/i)); // open drawer
    fireEvent.click(screen.getByText(/new course available/i)); // click notif

    const actions = store.getActions();
    expect(actions).toContainEqual(markAsRead(1));
  });

  test('Component is memoized', () => {
    expect(typeof Notifications.type).toBe('function');
    expect(Notifications.$$typeof.toString()).toBe('Symbol(react.memo)');
  });
});
