import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem', () => {
  test('renders default notification with blue color', () => {
    render(<NotificationItem type="default" value="Test message" />);
    const item = screen.getByText('Test message');
    expect(item).toHaveAttribute('data-notification-type', 'default');
  });

  test('renders urgent notification with red color', () => {
    render(<NotificationItem type="urgent" value="Urgent message" />);
    const item = screen.getByText('Urgent message');
    expect(item).toHaveAttribute('data-notification-type', 'urgent');
  });
});
