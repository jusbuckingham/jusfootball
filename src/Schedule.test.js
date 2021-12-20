import { render, screen } from '@testing-library/react';
import Schedule from './Schedule'

test('renders Bills In Schedule', () => {
  render(<Schedule />);
  const spanElement = screen.getByTitle(/Action/i);
  expect(spanElement).toBeInTheDocument();
});
