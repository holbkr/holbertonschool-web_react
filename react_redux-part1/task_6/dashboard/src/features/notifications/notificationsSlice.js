import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getLatestNotification } from "../../utils/utils";

const initialState = {
  notifications: [],
  displayDrawer: true,
};

const API_BASE_URL = "http://localhost:5173";
const ENDPOINTS = {
  notifications: `${API_BASE_URL}/notifications.json`,
};

// Async thunk pour récupérer les notifications
export const fetchNotifications = createAsyncThunk(
  "notifications/fetchNotifications",
  async () => {
    try {
      const response = await axios.get(ENDPOINTS.notifications);
      const currentNotifications = response.data.notifications;

      const latestNotif = {
        id: 3,
        type: "urgent",
        html: { __html: getLatestNotification() },
      };

      const indexToReplace = currentNotifications.findIndex(
        (notification) => notification.id === 3
      );

      const updatedNotifications = [...currentNotifications];

      if (indexToReplace !== -1) {
        updatedNotifications[indexToReplace] = latestNotif;
      } else {
        updatedNotifications.push(latestNotif);
      }

      return updatedNotifications;
    } catch (error) {
      console.error("Error fetching notifications:", error);
      throw error;
    }
  }
);

const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    // Marque une notif comme lue (on la supprime de la liste)
    markNotificationAsRead: (state, action) => {
      const idToRemove = action.payload;
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== idToRemove
      );
    },
    // Affiche le panneau de notifications
    showDrawer: (state) => {
      state.displayDrawer = true;
    },
    // Cache le panneau de notifications
    hideDrawer: (state) => {
      state.displayDrawer = false;
    },
    // Permet de setter manuellement une liste de notifications (utile en cas de dispatch direct dans App.jsx)
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      state.notifications = action.payload;
    });
  },
});

// Export des actions
export const {
  markNotificationAsRead,
  showDrawer,
  hideDrawer,
  setNotifications,
} = notificationsSlice.actions;

export default notificationsSlice.reducer;
