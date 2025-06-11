import { StyleSheet, css } from 'aphrodite';
import { getCurrentYear, getFooterCopy } from '../../utils/utils';
import { useSelector } from 'react-redux';

export default function Footer() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className={css(styles.footer)} id="footer">
      <p>
        Copyright {getCurrentYear()} - {getFooterCopy(true)}
      </p>
      {isLoggedIn && (
        <p id="logoutSection">
          <a href="#" data-testid="contact-link">Contact us</a>
        </p>
      )}
    </div>
  );
}

const styles = StyleSheet.create({
  footer: {
    //display: 'flex',
    //flexDirection: 'column',
    //alignItems: 'center',
    //justifyContent: 'center',
    //fontStyle: 'italic',
    //fontFamily: 'sans-serif',
  },
});
