import React from 'react';
import CourseListRow from './CourseListRow';

class CourseList extends React.Component {
  static defaultProps = {
    courses: [],
  };

  render() {
    const { courses } = this.props;

    return (
      <div className="mx-auto my-8 w-full sm:w-[80%] max-w-5xl overflow-x-auto">
        <div className="overflow-hidden rounded-md border border-gray-400">
          <table id="CourseList" className="w-full border-collapse">
            {courses.length > 0 ? (
              <>
                <thead>
                  <CourseListRow isHeader={true} textFirstCell="Available courses" />
                  <CourseListRow isHeader={true} textFirstCell="Course name" textSecondCell="Credit" />
                </thead>
                <tbody>
                  {courses.map((course) => (
                    <CourseListRow
                      key={course.id}
                      textFirstCell={course.name}
                      textSecondCell={course.credit}
                    />
                  ))}
                </tbody>
              </>
            ) : (
              <tbody>
                <CourseListRow isHeader={true} textFirstCell="No course available yet" />
              </tbody>
            )}
          </table>
        </div>
      </div>
    );
  }
}

export default CourseList;
