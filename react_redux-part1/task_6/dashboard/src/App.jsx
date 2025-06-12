import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Notifications from './components/Notifications/Notifications';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import CourseList from './pages/CourseList/CourseList';
import BodySectionWithMarginBottom from './components/BodySectionWithMarginBottom/BodySectionWithMarginBottom';
import BodySection from './components/BodySection/BodySection';

import { login, logout } from './features/auth/authSlice';
import { fetchNotifications } from './features/notifications/notificationsSlice';
import { fetchCourses } from './features/courses/coursesSlice';

export default function App() {
  const dispatch = useDispatch();

  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const courses = useSelector((state) => state.courses.courses);

  // Important : on charge les notifications au montage
  useEffect(() => {
    dispatch(fetchNotifications());
  }, [dispatch]);

  // On ne charge les cours que si l'utilisateur est connecté
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchCourses());
    }
  }, [dispatch, isLoggedIn]);

  // Connexion : simulation d'un login
  const handleLogin = (email, password) => {
    dispatch(login({ email, password }));
  };

  // Déconnexion
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <Notifications />
      <Header user={user} logOut={handleLogout} />

      {!isLoggedIn ? (
        <BodySectionWithMarginBottom title="Log in to continue">
          <Login login={handleLogin} />
        </BodySectionWithMarginBottom>
      ) : (
        <BodySectionWithMarginBottom title="Course list">
          <CourseList courses={courses} />
        </BodySectionWithMarginBottom>
      )}

      <BodySection title="News from the School">
        <p>Holberton School news goes here</p>
      </BodySection>

      <Footer user={user} />
    </>
  );
}
