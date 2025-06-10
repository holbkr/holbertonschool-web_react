import { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../../assets/close-icon.png';
import NotificationItem from '../NotificationItem/NotificationItem';
import { markAsRead } from '../../redux/notificationSlice';

const styles = StyleSheet.create({
  notificationTitle: {
    float: 'right',
    position: 'absolute',
    right: '10px',
    top: '2px',
    cursor: 'pointer',
  },
  notifications: {
    border: 'dotted',
    borderColor: 'crimson',
    marginTop: '1%',
    paddingLeft: '1rem',
    marginBottom: '1rem',
    width: '40%',
    marginLeft: '59%',
    opacity: 1,
    visibility: 'visible',
    transition: 'opacity 0.3s ease-in-out',
  },
  visible: {
    opacity: 0,
    visibility: 'hidden',
  },
  notificationsButton: {
    position: 'absolute',
    cursor: 'pointer',
    right: '5px',
    top: '20px',
    background: 'transparent',
    border: 'none',
  },
  notificationTypeDefault: {
    color: 'blue',
  },
  notificationTypeUrgent: {
    color: 'red',
  },
  menuItem: {
    textAlign: 'right',
    cursor: 'pointer',
  },
});

const Notifications = memo(function Notifications() {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.notifications);
  const [hidden, setHidden] = useState(true); // true = caché

  const handleToggleDrawer = () => {
    setHidden((prev) => !prev);
  };

  return (
    <>
      <div className={css(styles.menuItem)} onClick={handleToggleDrawer}>
        Your notifications
      </div>
      <div className={`${css(styles.notifications)} ${hidden ? css(styles.visible) : ''}`}>
        {notifications.length > 0 ? (
          <>
            <p>Here is the list of notifications</p>
            <button
              onClick={handleToggleDrawer}
              aria-label="Close"
              className={css(styles.notificationsButton)}
            >
              <img src={closeIcon} alt="close icon" />
            </button>
            <ul>
              {notifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  markAsRead={() => dispatch(markAsRead(notification.id))}
                  className={
                    notification.type === 'urgent'
                      ? css(styles.notificationTypeUrgent)
                      : css(styles.notificationTypeDefault)
                  }
                />
              ))}
            </ul>
          </>
        ) : (
          <p>No new notifications for now</p>
        )}
      </div>
    </>
  );
});

export default Notifications;
