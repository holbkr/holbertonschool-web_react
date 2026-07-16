import closebtn from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

export default function Notifications({ notifications, displayDrawer = true }) {
  return (
    <div className="w-full md:w-1/4">
      <div className="mb-2 flex justify-end">
        <p className="text-right text-sm font-semibold text-[var(--color-main)] sm:text-base">Your notifications</p>
      </div>
      {displayDrawer ? (
        <div className="relative rounded-lg border border-dashed border-[var(--color-main)] bg-white p-3 shadow-sm sm:p-4 md:sticky md:top-4 md:max-w-xs">
          {notifications.length > 0 ? (
            <>
              <p className="mb-2 text-sm text-gray-700">Here is the list of notifications</p>
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
            <p className="text-sm text-gray-600">No new notification for now</p>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}