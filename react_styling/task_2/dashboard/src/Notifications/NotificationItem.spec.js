import NotificationItem from "./NotificationItem";
import { render, screen } from "@testing-library/react";

test('Check whether the li element has the color blue, and the the attribute data-notification-type set to default', () => {
  render(<NotificationItem type="default" value="Test notification" />);
  const li = screen.getByText('Test notification');

  expect(li).toBeInTheDocument();
  expect(li).toHaveAttribute('data-notification-type', 'default');
  expect(li).toHaveClass('text-[var(--color-default-notification-item)]');
})


test('Check whether the li element has the color red, and the the attribute data-notification-type set to urgent', () => {
  render(<NotificationItem type="urgent" value="Test urgent notification" />);
  const li = screen.getByText('Test urgent notification');

  expect(li).toBeInTheDocument();
  expect(li).toHaveAttribute('data-notification-type', 'urgent');
  expect(li).toHaveClass('text-[var(--color-urgent-notification-item)]');
})