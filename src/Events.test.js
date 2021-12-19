import { render, screen } from '@testing-library/react';
import Event from './Event'

test('renders Action keyword', () => {
  render(<Event />);
  const spanElement = screen.getByText(/Action/i);
  expect(spanElement).toBeInTheDocument();
});

