import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import WithLogging from '../HOC/WithLogging';
import useLogin from '../hooks/useLogin';

function Login({ logIn }) {
  const {
    email,
    password,
    enableSubmit,
    handleEmailChange,
    handlePasswordChange,
    handleSubmit,
  } = useLogin(logIn);

  return (
    <div className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleSubmit}>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={css(styles.input)}
          />
        </div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={css(styles.input)}
          />
        </div>
        <div className={css(styles.buttonWrapper)}>
          <input
            type="submit"
            value="OK"
            className={css(styles.button)}
            disabled={!enableSubmit}
          />
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  logIn: PropTypes.func,
};

Login.defaultProps = {
  logIn: () => {},
};

const styles = StyleSheet.create({
  body: {
    padding: '30px',
    '@media (max-width: 900px)': {
      padding: '20px',
    },
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '1em',
    '@media (max-width: 900px)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
    },
  },
  input: {
    marginLeft: '10px',
    '@media (max-width: 900px)': {
      marginLeft: '0',
      marginTop: '5px',
      width: '100%',
    },
  },
  buttonWrapper: {
    '@media (max-width: 900px)': {
      display: 'flex',
      justifyContent: 'flex-start',
    },
  },
  button: {
    marginLeft: '10px',
    '@media (max-width: 900px)': {
      marginLeft: '0',
    },
  },
});

export { Login };
const LoginWithLogging = WithLogging(Login);
export default LoginWithLogging;
