import React from 'react';
import './Notifications.css';
import closebtn from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

export default function Notifications({ notifications = [], displayDrawer = false }) {
  const handleClick = () => {
    console.log('Close button has been clicked');
  };

  return (
    <>
      <div className="notifications-title">
        <p>Your notifications</p>
      </div>

      {displayDrawer && (
        <div className="notifications">
          <button
            style={{
              position: "absolute",
              display: "flex",
              background: "none",
              borderStyle: "none",
              right: "1rem",
              top: "0.8rem",
              width: "0.5rem",
              height: "0.5rem",
            }}
            onClick={handleClick}
            aria-label="Close"
          >
            <img
              style={{
                width: "0.5rem",
                height: "0.5rem",
              }}
              src={closebtn}
              alt="Close"
            />
          </button>

          {notifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <>
              <p>Here is the list of notifications</p>
              <ul>
                {notifications.map((notification) => (
                  <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                  />
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </>
  );
}