import { memo, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import closeIcon from '../../assets/close-icon.png';
import NotificationItem from '../NotificationItem/NotificationItem';
import { markAsRead } from '../../redux/notificationSlice';

const styles = StyleSheet.create({
  notifications: {
    border: '1px dashed crimson',
    padding: '1rem',
    width: '40%',
    position: 'absolute',
    right: '10px',
    backgroundColor: 'white',
    visibility: 'hidden',
    opacity: 0,
    transition: 'opacity 0.3s ease, visibility 0.3s ease',
  },
  visible: {
    visibility: 'visible',
    opacity: 1,
  },
  notificationsButton: {
    position: 'absolute',
    right: '10px',
    top: '10px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  menuItem: {
    textAlign: 'right',
    cursor: 'pointer',
    padding: '0.5rem',
  },
});

const Notifications = memo(function Notifications() {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.notifications.notifications);
  const notifRef = useRef(null);

  const toggleDrawer = () => {
    if (notifRef.current) {
      notifRef.current.classList.toggle(css(styles.visible));
    }
  };

  return (
    <>
      <div className={css(styles.menuItem)} onClick={toggleDrawer}>
        Your notifications
      </div>
      <div ref={notifRef} className={`${css(styles.notifications)}`}>
        {notifications.length > 0 ? (
          <>
            <p>Here is the list of notifications</p>
            <button
              onClick={toggleDrawer}
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
                  html={notification.html}
                  markAsRead={() => dispatch(markAsRead(notification.id))}
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
