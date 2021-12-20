import { render, screen } from '@testing-library/react';
import Event from './Event'

test('renders action title', () => {
  render(<Event />);
  const spanElement = screen.getByTitle(/Action/i);
  expect(spanElement).toBeInTheDocument();
});

