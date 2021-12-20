import { render, screen } from '@testing-library/react';
import Admin from './Admin'

test('renders home title', () => {
  render(<Admin />);
  const spanElement = screen.getByTitle(/home/i);
  expect(spanElement).toBeInTheDocument();
});

