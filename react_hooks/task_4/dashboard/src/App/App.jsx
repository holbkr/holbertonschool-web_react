import React, { useState, useMemo, useCallback, useEffect } from 'react';
import axios from 'axios';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../Context/context';

const App = () => {
  const [displayDrawer, setDisplayDrawer] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [coursesList, setCoursesList] = useState([]);
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false,
  });

  const logIn = useCallback((email, password) => {
    setUser({
      email,
      password,
      isLoggedIn: true,
    });
  }, []);

  const logOut = useCallback(() => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  }, []);

  const markNotificationAsRead = useCallback((id) => {
    console.log(`Notification ${id} has been marked as read`);
    setNotifications((prev) => prev.filter((notif) => notif.id !== id));
  }, []);

  const handleDisplayDrawer = () => setDisplayDrawer(true);
  const handleHideDrawer = () => setDisplayDrawer(false);

  // Fetch notifications on initial mount
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await axios.get('/notifications.json');
        const data = res.data.map((notif) =>
          notif.id === 3 ? { ...notif, html: { __html: getLatestNotification() } } : notif
        );
        setNotifications(data);
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Failed to fetch notifications:', err);
        }
      }
    };

    fetchNotifications();
  }, []);

  // Fetch courses when user logs in or logs out
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('/courses.json');
        setCoursesList(res.data);
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Failed to fetch courses:', err);
        }
      }
    };

    fetchCourses();
  }, [user]);

  return (
    <AppContext.Provider value={{ user, logOut }}>
      <div className={css(styles.app)}>
        <div className={css(styles.notifications)}>
          <Notifications
            notifications={notifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={handleDisplayDrawer}
            handleHideDrawer={handleHideDrawer}
            markNotificationAsRead={markNotificationAsRead}
          />
        </div>
        <Header />
        <div className={css(styles.body)}>
          {user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList courses={coursesList} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login
                logIn={logIn}
                email={user.email}
                password={user.password}
              />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Holberton School News goes here</p>
          </BodySection>
        </div>
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

const styles = StyleSheet.create({
  app: {
    margin: '0',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    flex: '1',
  },
  notifications: {
    display: 'flex',
    position: 'absolute',
    flexDirection: 'column',
    right: '0',
    paddingRight: '1rem',
    minWidth: '30rem',
  },
});

export default App;
