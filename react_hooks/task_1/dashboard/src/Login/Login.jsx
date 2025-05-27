import { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import WithLogging from '../HOC/WithLogging';

function Login({ logIn }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [enableSubmit, setEnableSubmit] = useState(false);

  const validateForm = (email, password) => {
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPassword = password.length >= 8;
    return isValidEmail && isValidPassword;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    setEnableSubmit(validateForm(updatedFormData.email, updatedFormData.password));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    logIn(formData.email, formData.password);
  };

  return (
    <div className={css(styles.body)}>
      <p>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit}>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className={css(styles.input)}
          />
        </div>
        <div className={css(styles.inputGroup)}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
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

export default WithLogging(Login);
