import authReducer, { login, logout } from '../auth/authSlice';

describe('authSlice', () => {
  const initialState = {
    user: {
      email: '',
      password: ''
    },
    isLoggedIn: false
  };

  it('should return the initial state by default', () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle login', () => {
    const action = login({ email: 'test@example.com', password: '123456' });
    const expectedState = {
      user: {
        email: 'test@example.com',
        password: '123456'
      },
      isLoggedIn: true
    };
    expect(authReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle logout', () => {
    const loggedInState = {
      user: {
        email: 'test@example.com',
        password: '123456'
      },
      isLoggedIn: true
    };
    const action = logout();
    expect(authReducer(loggedInState, action)).toEqual(initialState);
  });
});
