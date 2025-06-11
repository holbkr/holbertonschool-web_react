import { StyleSheet, css } from 'aphrodite';
import { useSelector } from 'react-redux';
import CourseListRow from './CourseListRow/CourseListRow';
import WithLogging from '../../components/HOC/WithLogging';

const styles = StyleSheet.create({
  courses: {
    //margin: '130px auto',
    //width: '90%',
    //height: '33vh',
  },
  table: {
    //width: '100%',
    //borderCollapse: 'collapse',
    //border: '2px solid rgb(161, 161, 161)',
  },
  thtd: {
    //border: '2px solid rgb(161, 161, 161)',
  },
});

function CourseList() {
  const courses = useSelector((state) => state.courses.courses);

  return (
    <div className={css(styles.courses)}>
      <table id="CourseList" className={css(styles.table)}>
        <thead>
          <CourseListRow
            textFirstCell="Available courses"
            isHeader={true}
            style={styles.thtd}
          />
          {courses.length > 0 && (
            <CourseListRow
              textFirstCell="Course name"
              textSecondCell="Credit"
              isHeader={true}
              style={styles.thtd}
            />
          )}
        </thead>
        <tbody>
          {courses.length === 0 ? (
            <CourseListRow
              textFirstCell="No course available yet"
              isHeader={false}
              style={styles.thtd}
            />
          ) : (
            courses.map((course) => (
              <CourseListRow
                key={course.id}
                textFirstCell={course.name}
                textSecondCell={course.credit}
                style={styles.thtd}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default WithLogging(CourseList);
