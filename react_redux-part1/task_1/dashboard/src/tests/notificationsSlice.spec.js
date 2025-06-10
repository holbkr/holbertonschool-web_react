import reducer, {
  fetchNotifications,
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
} from '../../features/notifications/notificationsSlice';
import { getLatestNotification } from '../../../utils/utils';

// Mock getLatestNotification
jest.mock('../../../utils/utils', () => ({
  getLatestNotification: jest.fn(() => '<strong>Urgent requirement</strong>'),
}));

describe('notificationsSlice', () => {
  const initialState = {
    notifications: [],
    displayDrawer: true,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState);
  });

  it('should handle showDrawer action', () => {
    const newState = reducer({ ...initialState, displayDrawer: false }, showDrawer());
    expect(newState.displayDrawer).toBe(true);
  });

  it('should handle hideDrawer action', () => {
    const newState = reducer({ ...initialState, displayDrawer: true }, hideDrawer());
    expect(newState.displayDrawer).toBe(false);
  });

  it('should remove a notification with markNotificationAsRead', () => {
    const stateWithNotifications = {
      notifications: [
        { id: 1, type: 'default', value: 'Test notification' },
        { id: 2, type: 'urgent', value: 'Another notification' },
      ],
      displayDrawer: true,
    };

    const newState = reducer(stateWithNotifications, markNotificationAsRead(2));
    expect(newState.notifications).toEqual([
      { id: 1, type: 'default', value: 'Test notification' },
    ]);
  });

  it('should fetch notifications and inject html for notification with id 3', async () => {
    const mockNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
      { id: 3, type: 'urgent', html: { __html: 'Old content' } },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockNotifications),
      })
    );

    const action = await fetchNotifications();
    const result = await reducer(initialState, fetchNotifications.fulfilled(action.payload));
    expect(result.notifications).toHaveLength(3);
    expect(result.notifications.find((n) => n.id === 3).html).toEqual({
      __html: '<strong>Urgent requirement</strong>',
    });
  });
});
