import { render, screen } from '@testing-library/react';
import App from '../App';

describe("Tests for App.js", () => {
  test('is slogan present', () => {
    render(<App />);
    const linkElement = screen.getByText(/We put your health first/i);
    expect(linkElement).toBeVisible();
  });
})
