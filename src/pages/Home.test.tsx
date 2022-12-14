import { screen } from '@testing-library/react';
import Home from 'pages/Home';
import { renderWithProviders } from 'testHelpers';
import userEvent from '@testing-library/user-event';

describe('Home Page', () => {
  it('should say Trivia Fighters and render content per each button', () => {
    renderWithProviders(<Home />);
    expect(screen.getByTestId('headline')).toHaveTextContent('TRIVIA FIGHTERS');
    expect(screen.getByTestId('easy')).toHaveTextContent('Easy');
    expect(screen.getByTestId('medium')).toHaveTextContent('Medium');
    expect(screen.getByTestId('seth')).toHaveTextContent('Seth');
  });

  it('will update opponent max/current health per difficulty and hero max/current health to 100 always, when clicking Easy, Medium, or Seth from Home page', async () => {
    const { store } = renderWithProviders(<Home />);
    const sethButton = screen.getByTestId('seth');
    userEvent.click(sethButton);
    expect(store!.getState()).toEqual({
      game: {
        round: 1,
        dialogStage: 'action',
        action: 'none',
        question: {
          text: '',
          answer: '',
          choices: [],
        },
        difficulty: 'seth',
        gameStatus: 'playing',
      },
      hero: {
        maxHealth: 100,
        currentHealth: 100,
        attackValue: 0,
      },
      opponent: {
        maxHealth: 200,
        currentHealth: 200,
        attackValue: 0,
      },
    });
  });
});
