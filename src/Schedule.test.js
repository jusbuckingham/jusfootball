import { render, screen } from '@testing-library/react';
import Schedule from './Schedule'

test('renders Dashboard tag', () => {
  render(<Schedule />);
  const spanElement = screen.getByText(/Dashboard/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders Customers tag', () => {
  render(<Schedule />);
  const spanElement = screen.getByText(/Customers/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders Authentication tag', () => {
  render(<Schedule />);
  const spanElement = screen.getByText(/Authentication/i);
  expect(spanElement).toBeInTheDocument();
});
