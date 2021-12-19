import { render, screen } from '@testing-library/react';
import Scores from './Scores'

test('renders Dashboard tag', () => {
  render(<Scores />);
  const spanElement = screen.getByText(/Action/i);
  expect(spanElement).toBeInTheDocument();
});
