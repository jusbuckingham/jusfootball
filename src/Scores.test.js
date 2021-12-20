import { render, screen } from '@testing-library/react';
import Scores from './Scores'

test('renders action title', () => {
  render(<Scores />);
  const spanElement = screen.getByTitle(/Action/i);
  expect(spanElement).toBeInTheDocument();
});
