import { screen } from '@testing-library/react';
import { MOCK_APP_STATE } from 'store/mocks/app-state.mocks';
import { renderWithProviders } from 'testHelpers';
import Game from './Game';

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
});

// add test for Is Correct
