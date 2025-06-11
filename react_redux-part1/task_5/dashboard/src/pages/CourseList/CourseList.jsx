import { StyleSheet, css } from 'aphrodite';
import { useSelector } from 'react-redux';
import CourseListRow from './CourseListRow/CourseListRow';
import WithLogging from '../../components/HOC/WithLogging';

const styles = StyleSheet.create({
  courses: {
    margin: '130px auto',
    width: '90%',
    height: '33vh',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '2px solid rgb(161, 161, 161)',
  },
  thtd: {
    border: '2px solid rgb(161, 161, 161)',
  },
});

function CourseList() {
  // Utiliser un sélecteur pour obtenir la liste des cours
  // Le sélecteur s'attend probablement à ce que l'état ait une structure spécifique
  const courses = useSelector((state) => {
    // Vérifier si courses est un tableau ou s'il faut accéder à une propriété list
    if (Array.isArray(state.courses)) {
      return state.courses;
    }
    return state.courses?.list || [];
  });

  return (
    <div className={css(styles.courses)}>
      <table id="CourseList" className={css(styles.table)}>
        <thead>
          <CourseListRow
            textFirstCell="Available courses"
            isHeader={true}
            style={styles.thtd}
          />
          <CourseListRow
            textFirstCell="Course name"
            textSecondCell="Credit"
            isHeader={true}
            style={styles.thtd}
          />
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
                isHeader={false}
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
