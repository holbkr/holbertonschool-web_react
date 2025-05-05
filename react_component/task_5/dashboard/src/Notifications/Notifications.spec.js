import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils.js";

describe('Notifications', () => {
  const mockNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
  ];

  test('Check the existence of the notifications title Here is the list of notifications', () => {
    render(<Notifications notifications={mockNotifications} displayDrawer={true} />);
    const notiftitle = screen.getByText(/Here is the list of notifications/i);
    expect(notiftitle).toBeInTheDocument();
  });

  test('Check the existence of the button element in the notifications', () => {
    render(<Notifications notifications={mockNotifications} displayDrawer={true} />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('Verify that there are 3 li elements as notifications rendered', () => {
    render(<Notifications notifications={mockNotifications} displayDrawer={true} />);
    const lielements = screen.getAllByRole('listitem');
    expect(lielements.length).toBe(3);
  });

  test('Check whether clicking the close button logs Close button has been clicked to the console.', () => {
    const consolelog = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications notifications={mockNotifications} displayDrawer={true} />);
    const button = screen.getByRole('button', { name: /close/i });

    fireEvent.click(button);
    expect(consolelog).toHaveBeenCalledWith('Close button has been clicked');
    consolelog.mockRestore();
  });

  test('Clicking on a notification logs the correct message', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<Notifications notifications={mockNotifications} displayDrawer={true} />);

    const listItems = screen.getAllByRole('listitem');
    fireEvent.click(listItems[1]); // id = 2

    expect(consoleSpy).toHaveBeenCalledWith('Notification 2 has been marked as read');
    consoleSpy.mockRestore();
  });
});

describe('Whenever the prop displayDrawer set to false', () => {
  test('Check that the Notifications component doesn t displays the elements', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
    ];
    render(<Notifications notifications={notifications} displayDrawer={false} />);

    expect(screen.queryByText("Here is the list of notifications")).not.toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});

describe('Whenever the the prop displayDrawer set to true', () => {
  test('Check that the Notifications component displays the elements', () => {
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

  test('Check that the Notifications component displays the elements', () => {
    const notifications = [];
    render(<Notifications notifications={notifications} displayDrawer={true} />);
    expect(screen.queryByText("No new notification for now")).toBeInTheDocument();
  });
});

describe('Notifications re-render optimization (task 7)', () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('does not re-render when notifications length does not change', () => {
    const initial = [
      { id: 1, type: 'default', value: 'Test 1' }
    ];
    const { rerender } = render(<Notifications notifications={initial} displayDrawer={true} />);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    const newProps = [
      { id: 1, type: 'default', value: 'Updated content' }
    ];
    rerender(<Notifications notifications={newProps} displayDrawer={true} />);

    expect(consoleSpy).not.toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  test('does re-render when notifications length increases', () => {
    const initial = [
      { id: 1, type: 'default', value: 'Test 1' }
    ];
    const { rerender } = render(<Notifications notifications={initial} displayDrawer={true} />);

    const updated = [
      ...initial,
      { id: 2, type: 'urgent', value: 'Test 2' }
    ];
    rerender(<Notifications notifications={updated} displayDrawer={true} />);

    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(2);
  });
});
