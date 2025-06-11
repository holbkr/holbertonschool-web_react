import { memo } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { useSelector, useDispatch } from 'react-redux';
import closeIcon from '../../assets/close-icon.png';
import NotificationItem from '../NotificationItem/NotificationItem';
import {
  markAsRead,
  setDisplayDrawer
} from '../../actions/notificationActionCreators';

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
  },
});

// Composant de présentation
export const NotificationsUI = memo(function NotificationsUI({
  displayDrawer,
  handleDisplayDrawer,
  handleHideDrawer,
  notifications = [],
  markNotificationAsRead,
}) {
  return (
    <>
      <div
        className={css(styles.notificationTitle)}
        onClick={handleDisplayDrawer}
        data-testid="menuItem"
      >
        Your notifications
      </div>
      {displayDrawer && (
        <div
          className={css(styles.notifications)}
          data-testid="notificationsPanel"
        >
          {notifications.length > 0 ? (
            <>
              <p>Here is the list of notifications</p>
              <button
                onClick={handleHideDrawer}
                aria-label="Close"
                className={css(styles.notificationsButton)}
                data-testid="closeButton"
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
                    markAsRead={markNotificationAsRead}
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
      )}
    </>
  );
});

// Composant conteneur connecté à Redux
function Notifications() {
  const dispatch = useDispatch();
  const notifications = useSelector(state => state.notifications.notifications || []);
  const displayDrawer = useSelector(state => state.notifications.displayDrawer);
  const filter = useSelector(state => state.notifications.filter || 'DEFAULT');

  // Filtrer les notifications selon le filtre actuel
  const filteredNotifications = filter === 'URGENT'
    ? notifications.filter(notif => notif.type === 'urgent')
    : notifications;

  // Handlers pour les actions Redux
  const handleDisplayDrawer = () => {
    dispatch(setDisplayDrawer(true));
  };

  const handleHideDrawer = () => {
    dispatch(setDisplayDrawer(false));
  };

  const handleMarkNotificationAsRead = (id) => {
    dispatch(markAsRead(id));
  };

  return (
    <NotificationsUI
      displayDrawer={displayDrawer}
      handleDisplayDrawer={handleDisplayDrawer}
      handleHideDrawer={handleHideDrawer}
      notifications={filteredNotifications}
      markNotificationAsRead={handleMarkNotificationAsRead}
    />
  );
}

export default Notifications;
