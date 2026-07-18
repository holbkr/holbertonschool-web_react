import PropTypes from 'prop-types';

export default function NotificationItem({ type, html, value }) {
  const colorClass = type === 'urgent'
    ? 'text-[var(--urgent-notification-item)]'
    : 'text-[var(--default-notification-item)]';

  const baseClass = `rounded border border-gray-300 p-3 text-sm sm:border-gray-200 sm:p-2 sm:text-base ${colorClass}`;

  if (html) {
    return (
      <li
        data-notification-type={type}
        className={baseClass}
        dangerouslySetInnerHTML={html}
      />
    );
  }

  return (
    <li
      data-notification-type={type}
      className={baseClass}
    >
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: 'default',
};
