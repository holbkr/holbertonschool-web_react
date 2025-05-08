import React from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends React.Component {
  render() {
    return (
      <div className={css(styles.body)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">
          Email:
          <input id="email" type="email" className={css(styles.input)} />
        </label>
        <label htmlFor="password">
          Password:
          <input id="password" type="password" className={css(styles.input)} />
        </label>
        <button className={css(styles.button)}>OK</button>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    padding: '30px',
  },
  input: {
    margin: '0 10px',
  },
  button: {
    marginLeft: '10px',
  },
});

export default Login;
