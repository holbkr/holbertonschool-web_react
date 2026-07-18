# 1. Update CourseList and CourseListRow styles

Convert the `CourseList` and `CourseListRow` components' styling from CSS to TailwindCSS utility classes.

## Files

- `dashboard/src/main.css`: adds the `--color-table-header` and `--color-table-rows` theme variables
- `dashboard/src/CourseList/CourseList.jsx`: responsive container occupying 80% of the page width, centered, table fills its container
- `dashboard/src/CourseList/CourseListRow.jsx`: conditional background colors and opacity for header/body rows, bordered cells, left padding on `td` elements
