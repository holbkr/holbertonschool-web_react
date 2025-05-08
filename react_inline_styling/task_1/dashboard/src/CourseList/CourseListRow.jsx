import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function CourseListRow({ isHeader = false, textFirstCell = "", textSecondCell = null }) {
  return (
    <tr className={css(isHeader ? styles.headerRow : styles.bodyRow)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2">{textFirstCell}</th>
        ) : (
          <>
            <th className={css(styles.thLeft)}>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    backgroundColor: 'rgba(222, 181, 181, 0.27)',
  },
  bodyRow: {
    backgroundColor: 'rgba(245, 245, 245, 0.67)',
  },
  thLeft: {
    width: '70%',
  },
});
