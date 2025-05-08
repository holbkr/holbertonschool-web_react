import React from 'react';
import { StyleSheet, css } from 'aphrodite'; // ✅ Aphrodite
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import WithLogging from '../HOC/WithLogging';

// Composants de base
import LoginBase from '../Login/Login';
import CourseListBase from '../CourseList/CourseList';

// Enrobage HOC
const Login = WithLogging(LoginBase);
const CourseList = WithLogging(CourseListBase);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  static defaultProps = {
    logOut: () => {},
    isLoggedIn: true,
  };

  static propTypes = {
    logOut: PropTypes.func,
    isLoggedIn: PropTypes.bool,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    const notificationsList = [
      { id: 1, type: 'urgent', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];

    const coursesList = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    return (
      <div className={css(styles.app)}>
        <div className={css(styles.notifications)}>
          <Notifications notifications={notificationsList} />
        </div>
        <Header />
        {isLoggedIn ? (
          <BodySectionWithMarginBottom title="Course list">
            <CourseList courses={coursesList} />
          </BodySectionWithMarginBottom>
        ) : (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login />
          </BodySectionWithMarginBottom>
        )}
        <BodySection title="News from the School">
          <p>Holberton School News goes here</p>
        </BodySection>
        <Footer className={css(styles.footer)} />
      </div>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    position: 'relative',
    minHeight: '100vh',
  },
  notifications: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  footer: {
    textAlign: 'center',
    fontStyle: 'italic',
    borderTop: '2px solid #ccc',
    padding: '1em',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

export default App;
