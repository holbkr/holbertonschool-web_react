# 2. Update the Notifications Panel

Convert the `Notifications` and `NotificationItem` components' styling from CSS to TailwindCSS utility classes.

## Files

- `dashboard/src/main.css`: adds the `--main-color`, `--default-notification-item` and `--urgent-notification-item` theme variables
- `dashboard/src/Notifications/NotificationItem.jsx`: text color driven by notification type using the theme variables
- `dashboard/src/Notifications/Notifications.jsx`: title on top right of the panel, dashed border using `--main-color`, panel occupying ~25% of the page width on desktop
