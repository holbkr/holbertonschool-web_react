import { useMemo } from 'react';
import closebtn from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

export default function Notifications({ notifications, displayDrawer = true }) {
  const hasNotifications = useMemo(() => notifications.length > 0, [notifications.length]);

  return (
    <div className="w-full">
      <div className="mb-2 flex justify-end">
        <p className={`text-right text-sm font-semibold text-[var(--color-main)] sm:text-base ${hasNotifications ? 'animate-bounce' : ''}`}>
          Your notifications
        </p>
      </div>
      {displayDrawer ? (
        <div className="rounded-lg border border-dashed border-[var(--color-main)] bg-white p-3 shadow-sm sm:p-4 lg:sticky lg:top-4">
          {hasNotifications ? (
            <>
              <p className="mb-2 text-sm text-slate-700">Here is the list of notifications</p>
              <button
                className="absolute right-3 top-3 cursor-pointer border-none bg-transparent"
                onClick={() => console.log('Close button has been clicked')}
                aria-label="Close"
              >
                <img src={closebtn} alt="Close" className="h-3 w-3" />
              </button>
              <ul className="space-y-2">
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
          ) : (
            <p className="text-sm text-slate-600">No new notification for now</p>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}