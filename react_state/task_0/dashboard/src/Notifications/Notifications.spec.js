import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils.js";
import { StyleSheetTestUtils } from 'aphrodite';

beforeAll(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterAll(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('Notifications component', () => {
  const mockNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
  ];

  test('renders the title "Here is the list of notifications"', () => {
    render(<Notifications notifications={mockNotifications} displayDrawer={true} />);
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
  });

  test('renders the close button', () => {
    render(<Notifications notifications={mockNotifications} displayDrawer={true} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('renders 3 <li> items when 3 notifications are passed', () => {
    render(<Notifications notifications={mockNotifications} displayDrawer={true} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('logs correct message when clicking on a notification', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications notifications={mockNotifications} displayDrawer={true} />);
    const listItems = screen.getAllByRole('listitem');
    fireEvent.click(listItems[1]);
    expect(consoleSpy).toHaveBeenCalledWith('Notification 2 has been marked as read');
    consoleSpy.mockRestore();
  });
});

describe('Notifications display logic', () => {
  test('does not render notification panel when displayDrawer is false', () => {
    render(<Notifications notifications={[]} displayDrawer={false} />);
    expect(screen.queryByText("Here is the list of notifications")).not.toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  test('renders notification panel when displayDrawer is true', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];
    render(<Notifications notifications={notifications} displayDrawer={true} />);
    expect(screen.getByText("Here is the list of notifications")).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('renders "No new notification for now" when list is empty', () => {
    render(<Notifications notifications={[]} displayDrawer={true} />);
    expect(screen.getByText("No new notification for now")).toBeInTheDocument();
  });
});

describe('Notifications update optimization', () => {
  test('does not re-render when notifications length stays the same', () => {
    const initial = [{ id: 1, type: 'default', value: 'Hello' }];
    const { rerender } = render(<Notifications notifications={initial} displayDrawer={true} />);
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const sameLength = [{ id: 1, type: 'default', value: 'Updated' }];
    rerender(<Notifications notifications={sameLength} displayDrawer={true} />);
    expect(consoleSpy).not.toHaveBeenCalled();
  });

  test('re-renders when notifications length increases', () => {
    const initial = [{ id: 1, type: 'default', value: 'Hello' }];
    const { rerender } = render(<Notifications notifications={initial} displayDrawer={true} />);
    const updated = [
      ...initial,
      { id: 2, type: 'urgent', value: 'New item' }
    ];
    rerender(<Notifications notifications={updated} displayDrawer={true} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});

// ✅ Tests demandés dans le sujet
describe('Notifications interactions', () => {
  test('Clicking on the menu item calls handleDisplayDrawer', () => {
    const handleDisplayDrawer = jest.fn();
    render(
      <Notifications
        notifications={[]}
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawer}
      />
    );
    const menuItem = screen.getByText('Your notifications');
    fireEvent.click(menuItem);
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

  test('Clicking on the close button calls handleHideDrawer', () => {
    const handleHideDrawer = jest.fn();
    render(
      <Notifications
        notifications={[]}
        displayDrawer={true}
        handleHideDrawer={handleHideDrawer}
      />
    );
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(handleHideDrawer).toHaveBeenCalled();
  });
});
