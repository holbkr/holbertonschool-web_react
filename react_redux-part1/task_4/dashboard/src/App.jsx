import { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import Notifications from './components/Notifications/Notifications';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import CourseList from './pages/CourseList/CourseList';
import { getLatestNotification } from './utils/utils';
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom';
import BodySection from './components/BodySection/BodySection';

import { login, logout } from './features/auth/authSlice';
import { setCourses } from './features/courses/coursesSlice';
import { setNotifications, markAsRead, toggleDrawer } from './features/notifications/notificationsSlice';

const API_BASE_URL = 'http://localhost:5173';
const ENDPOINTS = {
  courses: `${API_BASE_URL}/courses.json`,
  notifications: `${API_BASE_URL}/notifications.json`,
};

export default function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const courses = useSelector((state) => state.courses);
  const notifications = useSelector((state) => state.notifications.items);
  const displayDrawer = useSelector((state) => state.notifications.displayDrawer);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(ENDPOINTS.notifications);
        const latestNotif = {
          id: 3,
          type: 'urgent',
          html: { __html: getLatestNotification() },
        };
        const currentNotifications = response.data.notifications;
        const updated = [...currentNotifications];
        const index = updated.findIndex((n) => n.id === 3);
        if (index !== -1) updated[index] = latestNotif;
        else updated.push(latestNotif);

        dispatch(setNotifications(updated));
      } catch (error) {
        console.error('Error fetching notifications:', error);
      }
    };

    fetchNotifications();
  }, [dispatch]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(ENDPOINTS.courses);
        dispatch(setCourses(response.data.courses));
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    if (isLoggedIn) fetchCourses();
  }, [dispatch, isLoggedIn]);

  const handleDisplayDrawer = useCallback(() => {
    dispatch(toggleDrawer());
  }, [dispatch]);

  const handleHideDrawer = useCallback(() => {
    dispatch(toggleDrawer());
  }, [dispatch]);

  const logIn = (email, password) => {
    dispatch(login({ email, password }));
  };

  const logOutUser = () => {
    dispatch(logout());
  };

  const markNotificationAsRead = useCallback((id) => {
    dispatch(markAsRead(id));
    console.log(`Notification ${id} has been marked as read`);
  }, [dispatch]);

  return (
    <>
      <Notifications
        notifications={notifications}
        handleHideDrawer={handleHideDrawer}
        handleDisplayDrawer={handleDisplayDrawer}
        displayDrawer={displayDrawer}
        markNotificationAsRead={markNotificationAsRead}
      />
      <>
        <Header user={user} logOut={logOutUser} />
        {!isLoggedIn ? (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login login={logIn} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList courses={courses} />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p>Holberton School news goes here</p>
        </BodySection>
      </>
      <Footer />
    </>
  );
}
