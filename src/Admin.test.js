import { render, screen } from '@testing-library/react';
import Admin from './Admin'

test('renders Dashboard tag', () => {
  render(<Admin />);
  const spanElement = screen.getByTitle(/home/i);
  expect(spanElement).toBeInTheDocument();
});

