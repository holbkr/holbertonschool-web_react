import reducer, { fetchCourses } from '../courses/coursesSlice';
import { logout } from '../auth/authSlice';

describe('coursesSlice', () => {
  const initialState = {
    courses: [],
  };

  it('should return the initial state by default', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should handle fetchCourses.fulfilled', () => {
    const courses = [
      { id: 1, name: 'React Basics' },
      { id: 2, name: 'Redux Advanced' },
    ];

    const action = {
      type: fetchCourses.fulfilled.type,
      payload: courses,
    };

    const state = reducer(initialState, action);
    expect(state.courses).toEqual(courses);
  });

  it('should reset courses on logout', () => {
    const loggedInState = {
      courses: [
        { id: 1, name: 'React Basics' },
      ],
    };

    const state = reducer(loggedInState, logout());
    expect(state).toEqual(initialState);
  });
});
