import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: [],
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    markAsRead: (state, action) => {
      const id = action.payload;
      state.notifications = state.notifications.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      );
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload.map((notif) => ({
        ...notif,
        isRead: notif.isRead ?? false,
      }));
    },
  },
});

export const {
  markAsRead,
  setNotifications,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
