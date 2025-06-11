import reducer, {
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
  fetchNotifications,
} from '../notifications/notificationsSlice';

describe('notificationsSlice', () => {
  const initialState = {
    notifications: [],
    displayDrawer: true,
  };

  it('should return the initial state by default', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle showDrawer', () => {
    const state = reducer({ ...initialState, displayDrawer: false }, showDrawer());
    expect(state.displayDrawer).toBe(true);
  });

  it('should handle hideDrawer', () => {
    const state = reducer({ ...initialState, displayDrawer: true }, hideDrawer());
    expect(state.displayDrawer).toBe(false);
  });

  it('should handle markNotificationAsRead', () => {
    const stateWithNotifications = {
      ...initialState,
      notifications: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
      ],
    };
    const action = markNotificationAsRead(2);
    const state = reducer(stateWithNotifications, action);
    expect(state.notifications).toHaveLength(1);
    expect(state.notifications[0].id).toBe(1);
  });

  it('should handle fetchNotifications.fulfilled', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: '<strong>Urgent requirement</strong> - complete by EOD' }
    ];
    const action = {
      type: fetchNotifications.fulfilled.type,
      payload: notifications,
    };
    const state = reducer(initialState, action);
    expect(state.notifications).toEqual(notifications);
  });
});
