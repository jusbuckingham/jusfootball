import { render, screen } from '@testing-library/react';
import Scores from './Scores'

test('renders Action Text', () => {
  render(<Scores />);
  const spanElement = screen.getByTitle(/Action/i);
  expect(spanElement).toBeInTheDocument();
});
