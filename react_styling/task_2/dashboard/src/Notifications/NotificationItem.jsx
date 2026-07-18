import React from "react";
import PropTypes from 'prop-types';

export default function NotificationItem({ type, html, value }) {
  const colorClass = type === 'urgent'
    ? 'text-[var(--urgent-notification-item)]'
    : 'text-[var(--default-notification-item)]';

  if (html) {
    return (
      <li
        data-notification-type={type}
        className={`rounded border border-gray-200 p-2 text-sm sm:text-base ${colorClass}`}
        dangerouslySetInnerHTML={html}
      />
    );
  }

  return (
    <li
      data-notification-type={type}
      className={`rounded border border-gray-200 p-2 text-sm sm:text-base ${colorClass}`}
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
  type: 'default'
};