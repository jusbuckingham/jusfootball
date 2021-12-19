import { render, screen } from '@testing-library/react';
import Event from './Event'

test('renders Dashboard tag', () => {
  render(<Event />);
  const spanElement = screen.getByText(/Dashboard/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders Customers tag', () => {
  render(<Event />);
  const spanElement = screen.getByText(/Customers/i);
  expect(spanElement).toBeInTheDocument();
});

test('renders Authentication tag', () => {
  render(<Event />);
  const spanElement = screen.getByText(/Authentication/i);
  expect(spanElement).toBeInTheDocument();
});
