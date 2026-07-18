import closebtn from '../assets/close-button.png';
import NotificationItem from './NotificationItem';

export default function Notifications({ notifications, displayDrawer = true }) {
  return (
    <div className="w-full min-[913px]:w-1/4">
      <div className="mb-2 flex justify-end">
        <p className="notification-title text-right text-sm font-semibold text-[var(--main-color)] sm:text-base">Your notifications</p>
      </div>
      {displayDrawer ? (
        <div className="fixed inset-0 z-50 overflow-y-auto border-0 bg-white p-3 shadow-sm min-[913px]:static min-[913px]:z-auto min-[913px]:h-auto min-[913px]:w-auto min-[913px]:rounded-lg min-[913px]:border min-[913px]:border-dashed min-[913px]:border-[var(--main-color)] min-[913px]:p-4 min-[913px]:sticky min-[913px]:top-4">
          {notifications.length > 0 ? (
            <>
              <p className="mb-2 text-sm text-slate-700">Here is the list of notifications</p>
              <button
                className="absolute right-3 top-3 cursor-pointer border-none bg-transparent"
                onClick={() => console.log('Close button has been clicked')}
                aria-label="Close"
              >
                <img src={closebtn} alt="Close" className="h-3 w-3" />
              </button>
              <ul className="list-none space-y-2 p-3 min-[913px]:p-0">
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
