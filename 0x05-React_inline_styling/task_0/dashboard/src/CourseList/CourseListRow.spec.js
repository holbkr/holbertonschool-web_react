import { render, screen } from "@testing-library/react";
import CourseListRow from "./CourseListRow";

describe('When isHeader is true', () => {
  test('Check whether the component renders one columnheader that has the attributecolspan = 2', () => {
    render(
      <table>
        <tbody>
        <CourseListRow isHeader={true} textFirstCell="test OnlyOneCell" />
        </tbody>
      </table>
  );

    const cols = screen.getAllByRole('columnheader');

    expect(cols).toHaveLength(1);
    expect(cols[0]).toHaveAttribute('colspan', '2');
  })
  test('Check whether the component renders 2 <th> cells', () => {
    render(
      <table>
        <tbody>
        <CourseListRow isHeader={true} textFirstCell="test firstCell" textSecondCell="testSecondCell" />
        </tbody>
      </table>
  );

    const cols = screen.getAllByRole('columnheader');

    expect(cols).toHaveLength(2);
  })
});

describe('When isHeader is false', () => {
  test('Check to test the component renders correctly two td elements within a tr element', () => {
    render(
      <table>
        <tbody>
        <CourseListRow isHeader={false} textFirstCell="test firstCell" textSecondCell="testSecondCell" />
        </tbody>
      </table>
  );

  test('Header row has background color #deb5b545 (rgba equivalent)', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header Only" />
        </tbody>
      </table>
    );
    const row = screen.getByRole('row');
    expect(row).toHaveStyle({ backgroundColor: 'rgba(222, 181, 181, 0.27)' });
  });

  test('Header row with two cells has background color #deb5b545 (rgba equivalent)', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={true} textFirstCell="Header1" textSecondCell="Header2" />
        </tbody>
      </table>
    );
    const row = screen.getByRole('row');
    expect(row).toHaveStyle({ backgroundColor: 'rgba(222, 181, 181, 0.27)' });
  });

  test('Regular row has background color #f5f5f5ab (rgba equivalent)', () => {
    render(
      <table>
        <tbody>
          <CourseListRow isHeader={false} textFirstCell="Row1" textSecondCell="Row2" />
        </tbody>
      </table>
    );
    const row = screen.getByRole('row');
    expect(row).toHaveStyle({ backgroundColor: 'rgba(245, 245, 245, 0.67)' });
  });


  const row = screen.getByRole('row');
  const cells = screen.getAllByRole('cell');

  expect(row).toBeInTheDocument();
  expect(cells).toHaveLength(2);

  expect(cells[0]).toHaveTextContent("test firstCell");
  expect(cells[1]).toHaveTextContent("testSecondCell");
  })
})