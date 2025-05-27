import { useContext } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { getCurrentYear, getFooterCopy } from '../utils/utils';
import AppContext from '../Context/context';

export default function Footer() {
  const { user, logOut } = useContext(AppContext);

  return (
    <div className={css(styles.footer)}>
      <p>
        Copyright {getCurrentYear()} - {getFooterCopy(true)}
      </p>
      {user.isLoggedIn && (
        <p id="logoutSection" data-testid="logoutSection">
          Welcome <strong>{user.email}</strong>{' '}
          <a href="#" onClick={logOut}>
            (logout)
          </a>
        </p>
      )}
    </div>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    textAlign: 'center',
    fontStyle: 'italic',
    borderTop: '3px solid #e11d3f',
    padding: '1rem 0',
    backgroundColor: '#fff',
  },
});
