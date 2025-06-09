import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Notifications from './Notifications';
import { getLatestNotification } from '../../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';
import {
  showNotificationDrawer as showDrawer,
  hideNotificationDrawer as hideDrawer,
  markAsRead,
} from '../../features/notifications/notificationsSlice';

const mockStore = configureStore([]);

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

function renderWithRedux(ui, { initialState, store = mockStore(initialState) } = {}) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

const initialNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
];

test('Displays title, close button, and notification items when displayDrawer is true', () => {
  const { getByText, getByRole, getAllByRole } = renderWithRedux(<Notifications />, {
    initialState: {
      notifications: {
        notifications: initialNotifications,
        displayDrawer: true,
      },
    },
  });

  expect(getByText('Here is the list of notifications')).toBeInTheDocument();
  expect(getByRole('button')).toBeInTheDocument();
  expect(getAllByRole('listitem')).toHaveLength(3);
});

test('Displays "No new notifications for now" when list is empty', () => {
  renderWithRedux(<Notifications />, {
    initialState: {
      notifications: {
        notifications: [],
        displayDrawer: true,
      },
    },
  });

  expect(screen.getByText(/no new notifications for now/i)).toBeInTheDocument();
});

test('Clicking close button dispatches hideDrawer', () => {
  const store = mockStore({
    notifications: {
      notifications: initialNotifications,
      displayDrawer: true,
    },
  });

  render(
    <Provider store={store}>
      <Notifications />
    </Provider>
  );

  const closeButton = screen.getByLabelText('Close');
  fireEvent.click(closeButton);

  const actions = store.getActions();
  expect(actions).toContainEqual(hideDrawer());
});

test('Clicking "Your notifications" dispatches showDrawer', () => {
  const store = mockStore({
    notifications: {
      notifications: initialNotifications,
      displayDrawer: false,
    },
  });

  render(
    <Provider store={store}>
      <Notifications />
    </Provider>
  );

  const openText = screen.getByText(/your notifications/i);
  fireEvent.click(openText);

  const actions = store.getActions();
  expect(actions).toContainEqual(showDrawer());
});

test('Clicking a notification dispatches markAsRead with correct ID', () => {
  const store = mockStore({
    notifications: {
      notifications: initialNotifications,
      displayDrawer: true,
    },
  });

  render(
    <Provider store={store}>
      <Notifications />
    </Provider>
  );

  const notifItem = screen.getByText('New course available');
  fireEvent.click(notifItem);

  const actions = store.getActions();
  expect(actions).toContainEqual(markAsRead(1));
});

test('Component is memoized', () => {
  expect(typeof Notifications.type).toBe('function');
  expect(Notifications.$$typeof.toString()).toBe('Symbol(react.memo)');
});
