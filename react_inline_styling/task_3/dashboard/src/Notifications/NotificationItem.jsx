import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, id, markAsRead } = this.props;

    const styleClass = type === 'urgent' ? css(styles.urgent) : css(styles.default);

    if (html) {
      return (
        <li
          data-notification-type={type}
          className={styleClass}
          dangerouslySetInnerHTML={html}
          onClick={() => markAsRead(id)}
        />
      );
    }

    return (
      <li
        data-notification-type={type}
        className={styleClass}
        onClick={() => markAsRead(id)}
      >
        {value}
      </li>
    );
  }
}

const baseStyle = {
  '@media (max-width: 900px)': {
    width: '100%',
    borderBottom: '1px solid black',
    fontSize: '20px',
    padding: '10px 8px',
  },
};

const styles = StyleSheet.create({
  default: {
    color: 'blue',
    ...baseStyle,
  },
  urgent: {
    color: 'red',
    ...baseStyle,
  },
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  id: PropTypes.number,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => {},
};

export default NotificationItem;
