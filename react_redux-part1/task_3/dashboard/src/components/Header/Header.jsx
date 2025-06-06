import { StyleSheet, css } from 'aphrodite';
import holbertonLogo from '../assets/holberton-logo.jpg';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/uiActionCreators';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.ui.isUserLoggedIn);
  const user = useSelector((state) => state.ui.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={css(styles.header)}>
      <img src={holbertonLogo} className={css(styles.logo)} alt="holberton logo" />
      <h1 className={css(styles.title)}>School dashboard</h1>

      {isLoggedIn && (
        <section id="logoutSection" className={css(styles.logoutSection)} data-testid="logoutSection">
          <p>
            Welcome <strong>{user.email}</strong>{' '}
            <a href="#" onClick={handleLogout}>(logout)</a>
          </p>
        </section>
      )}
    </div>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '3px solid #e1003c',
    padding: '20px',
  },
  logo: {
    height: '150px',
    marginRight: '20px',
  },
  title: {
    color: '#e1003c',
    fontSize: '2rem',
  },
  logoutSection: {
    fontStyle: 'italic',
    fontSize: '1rem',
  },
});

export default Header;
