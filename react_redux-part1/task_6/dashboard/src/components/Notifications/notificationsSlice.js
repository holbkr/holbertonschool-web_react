// redux/features/notifications/notificationsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
  ],
  displayDrawer: false,
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    showDrawer: (state) => {
      state.displayDrawer = true;
    },
    hideDrawer: (state) => {
      state.displayDrawer = false;
    },
    markNotificationAsRead: (state, action) => {
      state.notifications = state.notifications.filter(
        (notif) => notif.id !== action.payload
      );
    },
  },
});

export const {
  showDrawer,
  hideDrawer,
  markNotificationAsRead,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
