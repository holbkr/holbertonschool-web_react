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
      // on ne supprime pas la notification, on la marque comme lue si tu veux la garder
      state.notifications = state.notifications.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      );
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload.map((notif) => ({
        ...notif,
        isRead: notif.isRead ?? false, // ajoute isRead si manquant
      }));
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
