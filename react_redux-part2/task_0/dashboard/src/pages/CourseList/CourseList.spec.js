import { render, screen } from '@testing-library/react';
import CourseList from '../../pages/CourseList/CourseList';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { StyleSheetTestUtils } from 'aphrodite';

const mockStore = configureStore([]);

describe('CourseList component', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  test('Renders correctly when course list is empty', () => {
    const store = mockStore({ courses: [] });

    render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    expect(screen.getByText(/No course available yet/i)).toBeInTheDocument();
  });

  test('Renders correctly with courses from Redux store', () => {
    const store = mockStore({
      courses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
    });

    render(
      <Provider store={store}>
        <CourseList />
      </Provider>
    );

    expect(screen.getByText(/Available courses/i)).toBeInTheDocument();
    expect(screen.getByText(/Course name/i)).toBeInTheDocument();
    expect(screen.getByText(/Credit/i)).toBeInTheDocument();

    // Vérifie chaque ligne de cours
    expect(screen.getByText('ES6')).toBeInTheDocument();
    expect(screen.getByText('60')).toBeInTheDocument();

    expect(screen.getByText('Webpack')).toBeInTheDocument();
    expect(screen.getByText('20')).toBeInTheDocument();

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('40')).toBeInTheDocument();
  });
});
