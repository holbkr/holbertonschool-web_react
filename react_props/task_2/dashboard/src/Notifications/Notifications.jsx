import './Notifications.css';
import React from 'react';
import closebtn from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

export default function Notifications({ notifications = [] }) {
  return (
    <>
      <div className="notifications">
        <p>Here is the list of notifications</p>
        <button
          style={{
            position: 'absolute',
            display: 'flex',
            background: 'none',
            borderStyle: 'none',
            right: '1rem',
            top: '0.8rem',
            width: '0.5rem',
            height: '0.5rem',
          }}
          onClick={() => console.log('Close button has been clicked')}
          aria-label="Close"
        >
          <img
            style={{
              width: '0.5rem',
              height: '0.5rem',
            }}
            src={closebtn}
            alt="Close"
          />
        </button>
        <ul>
          {notifications.map((notif) => (
            <NotificationItem
              key={notif.id}
              type={notif.type}
              value={notif.value}
              html={notif.html}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
