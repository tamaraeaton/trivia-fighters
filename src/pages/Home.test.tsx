import { screen } from '@testing-library/react';
import Home from 'pages/Home';
import { renderWithProviders } from 'testHelpers';

describe('Home Page', () => {
  it('should say Trivia Fighters and render content per each button', () => {
    renderWithProviders(<Home />);
    expect(screen.getByTestId('headline')).toHaveTextContent('TRIVIA FIGHTERS');
    expect(screen.getByTestId('easy')).toHaveTextContent('Easy');
    expect(screen.getByTestId('medium')).toHaveTextContent('Medium');
    expect(screen.getByTestId('seth')).toHaveTextContent('Seth');
  });
});
