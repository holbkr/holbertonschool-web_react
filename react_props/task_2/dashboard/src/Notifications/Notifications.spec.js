import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

const mockNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() } }
];

describe('Notifications component', () => {
  test('displays notification title', () => {
    render(<Notifications notifications={mockNotifications} />);
    const title = screen.getByText(/Here is the list of notifications/i);
    expect(title).toBeInTheDocument();
  });

  test('displays the close button', () => {
    render(<Notifications notifications={mockNotifications} />);
    const button = screen.getByRole('button', { name: /close/i });
    expect(button).toBeInTheDocument();
  });

  test('renders 3 list items from notifications prop', () => {
    render(<Notifications notifications={mockNotifications} />);
    const items = screen.getAllByRole('listitem');
    expect(items.length).toBe(3);
  });

  test('logs message when close button is clicked', () => {
    console.log = jest.fn();
    render(<Notifications notifications={mockNotifications} />);
    const button = screen.getByRole('button', { name: /close/i });
    fireEvent.click(button);
    expect(console.log).toHaveBeenCalledWith('Close button has been clicked');
  });
});
