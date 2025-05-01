import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications component', () => {
  const mockNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
  ];

  test('Always displays "Your notifications" text', () => {
    render(<Notifications />);
    expect(screen.getByText(/Your notifications/i)).toBeInTheDocument();
  });

  test('Does not display drawer content when displayDrawer is false', () => {
    render(<Notifications displayDrawer={false} notifications={mockNotifications} />);
    expect(screen.queryByText(/Here is the list of notifications/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.queryAllByRole('listitem')).toHaveLength(0);
  });

  test('Displays drawer content when displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} notifications={mockNotifications} />);
    expect(screen.getByText(/Here is the list of notifications/i)).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });

  test('Displays "No new notification for now" when notifications is empty and displayDrawer is true', () => {
    render(<Notifications displayDrawer={true} notifications={[]} />);
    expect(screen.getByText(/No new notification for now/i)).toBeInTheDocument();
  });

  test('Close button logs message to console when clicked', () => {
    const consolelog = jest.spyOn(console, 'log');
    render(<Notifications displayDrawer={true} notifications={mockNotifications} />);
    const button = screen.getByRole('button', { name: /close/i });
    fireEvent.click(button);
    expect(consolelog).toHaveBeenCalledWith('Close button has been clicked');
  });
});
