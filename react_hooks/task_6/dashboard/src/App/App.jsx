import React, { useReducer, useEffect } from 'react';
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
import { appReducer, initialState, APP_ACTIONS } from './appReducer';

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const logIn = (email, password) => {
    dispatch({
      type: APP_ACTIONS.LOGIN,
      payload: { email, password },
    });
  };

  const logOut = () => {
    dispatch({ type: APP_ACTIONS.LOGOUT });
  };

  const markNotificationAsRead = (id) => {
    dispatch({
      type: APP_ACTIONS.MARK_NOTIFICATION_READ,
      payload: id,
    });
  };

  const handleDisplayDrawer = () => {
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER, payload: true });
  };

  const handleHideDrawer = () => {
    dispatch({ type: APP_ACTIONS.TOGGLE_DRAWER, payload: false });
  };

  // Fetch notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await axios.get('/notifications.json');
        const data = res.data.map((notif) =>
          notif.id === 3 ? { ...notif, html: { __html: getLatestNotification() } } : notif
        );
        dispatch({
          type: APP_ACTIONS.SET_NOTIFICATIONS,
          payload: data,
        });
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Failed to fetch notifications:', err);
        }
      }
    };

    fetchNotifications();
  }, []);

  // Fetch courses on login/logout
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('/courses.json');
        dispatch({
          type: APP_ACTIONS.SET_COURSES,
          payload: res.data,
        });
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.error('Failed to fetch courses:', err);
        }
      }
    };

    fetchCourses();
  }, [state.user]);

  return (
    <div className={css(styles.app)}>
      <div className={css(styles.notifications)}>
        <Notifications
          notifications={state.notifications}
          displayDrawer={state.displayDrawer}
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
          markNotificationAsRead={markNotificationAsRead}
        />
      </div>
      <Header user={state.user} logOut={logOut} />
      <div className={css(styles.body)}>
        {state.user.isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList courses={state.courses} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login
              logIn={logIn}
              email={state.user.email}
              password={state.user.password}
            />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p>Holberton School News goes here</p>
        </BodySection>
      </div>
      <Footer user={state.user} />
    </div>
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
