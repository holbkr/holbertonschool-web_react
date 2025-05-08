import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import closebtn from '../assets/close-button.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.notifications.length !== this.props.notifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { notifications, displayDrawer } = this.props;

    return (
      <>
        <div className={css(styles.title)}>
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.panel)}>
            {notifications.length > 0 ? (
              <>
                <p className={css(styles.panelText)}>Here is the list of notifications</p>
                <button
                  className={css(styles.closeBtn)}
                  onClick={() => console.log('Close button has been clicked')}
                  aria-label="Close"
                >
                  <img src={closebtn} alt="Close" className={css(styles.closeIcon)} />
                </button>
                <ul className={css(styles.ul)}>
                  {notifications.map((notification) => (
                    <NotificationItem
                      key={notification.id}
                      id={notification.id}
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={this.markAsRead}
                    />
                  ))}
                </ul>
              </>
            ) : (
              <p>No new notification for now</p>
            )}
          </div>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    position: 'fixed',
    top: 0,
    right: 0,
    margin: '1rem',
  },
  panel: {
    border: '2px dashed red',
    padding: '10px',
    width: '400px',
    backgroundColor: '#fff8f8',
    position: 'absolute',
    right: 0,
    top: '2.5rem',
    zIndex: 1,
    '@media (max-width: 900px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      fontSize: '20px',
      padding: '20px',
      border: 'none',
      zIndex: 1000,
    },
  },
  panelText: {
    '@media (max-width: 900px)': {
      fontSize: '20px',
      margin: '10px',
    },
  },
  ul: {
    listStyle: 'none',
    padding: '0',
    '@media (max-width: 900px)': {
      padding: '0',
    },
  },
  closeBtn: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    zIndex: 1001,
  },
  closeIcon: {
    width: '10px',
    height: '10px',
  },
});

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  notifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string,
      value: PropTypes.string,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
    })
  ),
};

Notifications.defaultProps = {
  displayDrawer: true,
  notifications: [],
};

export default Notifications;
