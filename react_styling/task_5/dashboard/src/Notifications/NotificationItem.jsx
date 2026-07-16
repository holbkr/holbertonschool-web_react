import React from 'react';
import PropTypes from 'prop-types';

export default function NotificationItem({ type, html, value }) {
  const colorClass = type === 'urgent'
    ? 'text-[var(--color-urgent-notification-item)]'
    : 'text-[var(--color-default-notification-item)]';
  const style = { color: type === 'urgent' ? 'red' : 'blue' };

  if (html) {
    return (
      <li
        data-notification-type={type}
        className={`rounded border border-slate-200 bg-slate-50 p-2 text-sm ${colorClass}`}
        style={style}
        dangerouslySetInnerHTML={html}
      />
    );
  }

  return (
    <li
      data-notification-type={type}
      className={`rounded border border-slate-200 bg-slate-50 p-2 text-sm ${colorClass}`}
      style={style}
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