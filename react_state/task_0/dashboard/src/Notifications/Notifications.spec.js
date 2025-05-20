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

describe('When displayDrawer is false', () => {
  test('Notification panel is not displayed', () => {
    render(<Notifications notifications={[]} displayDrawer={false} />);
    expect(screen.queryByText("Here is the list of notifications")).not.toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});

describe('When displayDrawer is true', () => {
  test('Notification panel is displayed', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];
    render(<Notifications notifications={notifications} displayDrawer={true} />);
    expect(screen.queryByText("Here is the list of notifications")).toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(3);
    expect(screen.queryByRole('button')).toBeInTheDocument();
  });

  test('Displays "No new notification for now" when list is empty', () => {
    render(<Notifications notifications={[]} displayDrawer={true} />);
    expect(screen.queryByText("No new notification for now")).toBeInTheDocument();
  });
});

// ✅ Pure component update logic
describe('Notifications re-render logic', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('does not re-render when notifications length stays the same', () => {
    const initialNotifications = [{ id: 1, type: 'default', value: 'Hello' }];
    const { rerender } = render(<Notifications notifications={initialNotifications} displayDrawer={true} />);
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const newNotifications = [{ id: 1, type: 'default', value: 'Updated' }];
    rerender(<Notifications notifications={newNotifications} displayDrawer={true} />);
    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  test('does re-render when notifications length increases', () => {
    const initialNotifications = [{ id: 1, type: 'default', value: 'Hello' }];
    const { rerender } = render(<Notifications notifications={initialNotifications} displayDrawer={true} />);
    const updatedNotifications = [
      ...initialNotifications,
      { id: 2, type: 'urgent', value: 'New item' }
    ];
    rerender(<Notifications notifications={updatedNotifications} displayDrawer={true} />);
    expect(screen.getAllByRole('listitem')).toHaveLength(2);
  });
});

// ✅ Interaction with display/hide props
describe('Interaction with props functions', () => {
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
