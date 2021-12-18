import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Payments', () => {
  render(<App />);
  const linkElement = screen.getByText(/Payments/i);
  expect(linkElement).toBeInTheDocument();
});
