import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  test('Renders two "th" elements when isHeader is true and both texts are provided', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="First" textSecondCell="Second" />
        </tbody>
      </table>
    );

    const headers = screen.getAllByRole('columnheader');
    expect(headers).toHaveLength(2);
    expect(headers[0]).toHaveTextContent('First');
    expect(headers[1]).toHaveTextContent('Second');
  });

  test('Renders one "th" with colspan=2 when isHeader is true and textSecondCell is null', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Only one cell" textSecondCell={null} />
        </tbody>
      </table>
    );

    const header = screen.getByRole('columnheader');
    expect(header).toHaveAttribute('colspan', '2');
    expect(header).toHaveTextContent('Only one cell');
  });

  test('Renders two "td" elements when isHeader is false', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="Course 1" textSecondCell="60" />
        </tbody>
      </table>
    );

    const cells = screen.getAllByRole('cell');
    expect(cells).toHaveLength(2);
    expect(cells[0]).toHaveTextContent('Course 1');
    expect(cells[1]).toHaveTextContent('60');
  });

  test('Renders <tr> with two <td> inside when isHeader is false', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="Math" textSecondCell="100" />
        </tbody>
      </table>
    );

    const row = screen.getByRole('row');
    const cells = within(row).getAllByRole('cell');
    expect(row).toBeInTheDocument();
    expect(cells).toHaveLength(2);
  });
});
