import React from "react";

export default function CourseListRow({ isHeader=false, textFirstCell="", textSecondCell=null }) {
  const rowClasses = isHeader
    ? 'bg-[var(--color-table-header)]/66 text-left'
    : 'bg-[var(--color-table-rows)]/45 text-left';

  return (
    <tr className={rowClasses}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan="2" className="border border-gray-400 px-2 py-2">{textFirstCell}</th>
        ) : (
          <>
            <th className="w-[70%] border border-gray-400 px-2 py-2">{textFirstCell}</th>
            <th className="border border-gray-400 px-2 py-2">{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td className="border border-gray-400 py-2 pl-2">{textFirstCell}</td>
          <td className="border border-gray-400 py-2 pl-2">{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}