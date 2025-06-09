import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [],
  displayDrawer: false,
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    showNotificationDrawer: (state) => {
      state.displayDrawer = true;
    },
    hideNotificationDrawer: (state) => {
      state.displayDrawer = false;
    },
    markAsRead: (state, action) => {
      const id = action.payload;
      state.notifications = state.notifications.filter((notif) => notif.id !== id);
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
  },
});

export const {
  showNotificationDrawer,
  hideNotificationDrawer,
  markAsRead,
  setNotifications,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
