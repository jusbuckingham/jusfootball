import { render, screen } from '@testing-library/react';
import Schedule from './Schedule'

test('renders Dashboard tag', () => {
  render(<Schedule />);
  const spanElement = screen.getByText(/Action/i);
  expect(spanElement).toBeInTheDocument();
});
