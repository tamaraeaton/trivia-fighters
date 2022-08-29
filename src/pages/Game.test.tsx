import { screen } from '@testing-library/react';
import { MOCK_APP_STATE } from 'store/mocks/app-state.mocks';
import { MOCK_HERO_STATE } from 'store/mocks/hero.mocks';
import { renderWithProviders } from 'testHelpers';
import Game from './Game';
import userEvent from '@testing-library/user-event';

describe('Game Page', () => {
  it('player health bar should render', () => {
    renderWithProviders(<Game />);
    expect(screen.getByTestId('playerHealthBar')).toBeDefined();
  });

  it('opponent health bar should render', () => {
    renderWithProviders(<Game />);
    expect(screen.getByTestId('opponentHealthBar')).toBeDefined();
  });

  it('round should render', () => {
    renderWithProviders(<Game />);
    expect(screen.getByTestId('round')).toBeDefined();
  });

  it('avatar should render', () => {
    renderWithProviders(<Game />, {
      preloadedState: {
        game: {
          ...MOCK_APP_STATE.game,
          difficulty: 'medium',
        },
      },
    });
    expect(screen.getAllByTestId('barbarianBunny')).toBeDefined();
  });

  it('should render a message for dialog box', () => {
    renderWithProviders(<Game />, {
      preloadedState: {
        game: {
          ...MOCK_APP_STATE.game,
          dialogStage: 'attacking',
        },
      },
    });
    expect(screen.getByTestId('dialogMessage')).toHaveTextContent(
      'Choose an attack'
    );
  });
  it.only('should render attack value increased', async () => {
    renderWithProviders(<Game />, {
      preloadedState: {
        game: {
          ...MOCK_APP_STATE.game,
          action: 'attack',
          dialogStage: 'answering',
          attackStrength: 'light',
          isCorrect: true,
        },
        hero: MOCK_HERO_STATE,
      },
    });

    const correctAnswerButton = screen.getByText('Depends on the planet');
    await userEvent.click(correctAnswerButton);
    const attackValue = await screen.findAllByTestId('attackvalue');
    expect(attackValue[0].innerHTML).toEqual('5');
  });
});
