import { screen } from '@testing-library/react';
import Home from 'pages/Home';
import { renderWithProviders } from 'testHelpers';
import { MOCK_OPPONENT_STATE } from 'store/mocks/opponent.mocks';
import { MOCK_APP_STATE } from 'store/mocks/app-state.mocks';
import { MOCK_HERO_STATE } from 'store/mocks/hero.mocks';
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
    renderWithProviders(<Home />, {
      preloadedState: {
        game: {
          ...MOCK_APP_STATE.game,
          round: 1,
          dialogStage: 'action',
          action: 'none',
          question: {
            text: '',
            answer: '',
            choices: [],
          },
        },
        hero: {
          ...MOCK_HERO_STATE,
          maxHealth: 100,
          currentHealth: 100,
          attackValue: 0,
        },
        opponent: {
          ...MOCK_OPPONENT_STATE,
          maxHealth: 0,
          currentHealth: 0,
          attackValue: 0,
        },
      },
    });
    const sethButton = screen.getByTestId('seth');
    userEvent.click(sethButton);

    expect({
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
        playing: true,
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
    }).toBeDefined();
  });
});
