import { render, screen } from '@testing-library/react';
import App from '../App';

test('is slogan present', () => {
  render(<App />);
  const linkElement = screen.getByText(/We put your health first/i);
  expect(linkElement).toBeVisible();
});
