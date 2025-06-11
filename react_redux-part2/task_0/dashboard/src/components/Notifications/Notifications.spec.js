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
  const utils = render(<Provider store={store}>{ui}</Provider>);
  return { ...utils, store };
};

const mockNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

describe('Notifications component', () => {
  test('Displays title, close button, and list items when visible', () => {
    const { container } = renderWithRedux(<Notifications />, {
      initialState: {
        notifications: {
          notifications: mockNotifications,
        },
      },
    });

    fireEvent.click(screen.getByText(/your notifications/i));

    expect(screen.getByText(/here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);

    const panel = container.querySelector('[data-testid="notifications-panel"]');
    expect(panel.className).toMatch(/visible/);
  });

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

  test('Clicking a notification dispatches markAsRead with correct ID', () => {
    const { store } = renderWithRedux(<Notifications />, {
      initialState: {
        notifications: {
          notifications: mockNotifications,
        },
      },
    });

    fireEvent.click(screen.getByText(/your notifications/i));
    fireEvent.click(screen.getByText(/new course available/i));

    const actions = store.getActions();
    expect(actions).toContainEqual(markAsRead(1));
  });

  test('Toggles visibility of notifications drawer with CSS class', () => {
    const { container } = renderWithRedux(<Notifications />, {
      initialState: {
        notifications: {
          notifications: mockNotifications,
        },
      },
    });

    const toggle = screen.getByText(/your notifications/i);
    fireEvent.click(toggle); // Open

    const panel = container.querySelector('[data-testid="notifications-panel"]');
    expect(panel.className).toMatch(/visible/);

    const closeBtn = screen.getByLabelText(/close/i);
    fireEvent.click(closeBtn); // Close
    expect(panel.className).not.toMatch(/visible/);
  });

  test('Component is memoized', () => {
    expect(typeof Notifications.type).toBe('function');
    expect(Notifications.$$typeof.toString()).toBe('Symbol(react.memo)');
  });
});
