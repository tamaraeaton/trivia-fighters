import { screen } from '@testing-library/react';
import { renderWithProviders } from 'testHelpers';
import Game from './Game';
import userEvent from '@testing-library/user-event';
import { MOCK_OPPONENT_STATE } from 'store/mocks/opponent.mocks';
import { MOCK_APP_STATE } from 'store/mocks/app-state.mocks';
import { MOCK_HERO_STATE } from 'store/mocks/hero.mocks';

describe('Game Page: render tests', () => {
  it('player health bar should render', () => {
    renderWithProviders(<Game />);
    expect(screen.getByTestId('player-healthbarContainer')).toBeDefined();
  });

  it('opponent health bar should render', () => {
    renderWithProviders(<Game />);
    expect(screen.getByTestId('opponent-healthbarContainer')).toBeDefined();
  });

  it('round should render', () => {
    renderWithProviders(<Game />);
    expect(screen.getByTestId('round')).toBeDefined();
  });

  it('avatar should render per difficulty', () => {
    renderWithProviders(<Game />, {
      preloadedState: {
        game: {
          ...MOCK_APP_STATE.game,
          difficulty: 'medium',
        },
      },
    });
    expect(screen.getAllByText('Barbarian Bunny')).toBeDefined();
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

  it('should render Correct or Incorrect depending on selected option equalling answer', () => {
    renderWithProviders(<Game />, {
      preloadedState: {
        game: {
          ...MOCK_APP_STATE.game,
          dialogStage: 'answered',
        },
      },
    });
    expect(screen.getAllByTestId('dialogMessage')).toBeDefined();
  });
});

describe('Game Page: functionality tests', () => {
  let randomSpy: jest.SpyInstance;

  beforeEach(() => {
    randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.5);
  });

  afterEach(() => {
    randomSpy.mockRestore();
  });
  it('should render attack value increased', async () => {
    renderWithProviders(<Game />, {
      preloadedState: {
        game: {
          ...MOCK_APP_STATE.game,
          action: 'attack',
          dialogStage: 'answering',
          attackStrength: 'light',
        },
        hero: {
          ...MOCK_HERO_STATE,
          currentHealth: 80,
        },
      },
    });

    const attackValueBefore = await screen.findAllByTestId(
      'player-attackvalue'
    );
    expect(attackValueBefore[0].innerHTML).toEqual('5');
    const correctAnswerButton = screen.getByText('Depends on the planet');
    await userEvent.click(correctAnswerButton);
    const attackValueAfter = await screen.findAllByTestId('player-attackvalue');
    expect(attackValueAfter[0].innerHTML).toEqual('10');
  });

  it('should decrease hero health by 5 from opponent attackValue when attacking and answer is not correct', async () => {
    renderWithProviders(<Game />, {
      preloadedState: {
        game: {
          ...MOCK_APP_STATE.game,
          action: 'attack',
          dialogStage: 'answering',
          attackStrength: 'light',
        },
        hero: MOCK_HERO_STATE,
        opponent: MOCK_OPPONENT_STATE,
      },
    });
    const incorrectAnswerButton = screen.getByText('Four');
    const heroHealthBefore = await screen.findAllByTestId(
      'player-healthBarLabel'
    );
    expect(heroHealthBefore[0].innerHTML).toEqual('100/100');
    userEvent.click(incorrectAnswerButton);
    const nextButton = screen.getByText(/Next/);
    userEvent.click(nextButton);
    const heroHealthAfter = await screen.findAllByTestId(
      'player-healthBarLabel'
    );
    expect(heroHealthAfter[0].innerHTML).toEqual('95/100');
  });

  it('should increase hero health by 10 if blocking and answer is correct', async () => {
    renderWithProviders(<Game />, {
      preloadedState: {
        game: {
          ...MOCK_APP_STATE.game,
          action: 'block',
          dialogStage: 'answering',
          attackStrength: 'light',
        },
        hero: {
          ...MOCK_HERO_STATE,
          currentHealth: 80,
        },
      },
    });
    const heroHealthBefore = await screen.findAllByTestId(
      'player-healthBarLabel'
    );
    expect(heroHealthBefore[0].innerHTML).toEqual('80/100');
    const correctAnswerButton = screen.getByText('Depends on the planet');
    userEvent.click(correctAnswerButton);
    const nextButton = screen.getByText(/Next/);
    userEvent.click(nextButton);
    const heroHealthAfter = await screen.findAllByTestId(
      'player-healthBarLabel'
    );
    expect(heroHealthAfter[0].innerHTML).toEqual('90/100');
  });

  it('opponent attack value should render when clicking Attack/Block from Action Dialog', async () => {
    renderWithProviders(<Game />, {
      preloadedState: {
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
        opponent: {
          maxHealth: 200,
          currentHealth: 200,
          attackValue: 0,
        },
      },
    });
    const attackButton = screen.getByTestId('attack');
    expect(screen.queryByTestId('opponent-attackvalue')).toBe(null);
    userEvent.click(attackButton);
    expect(screen.getByTestId('opponent-attackvalue').innerHTML).toEqual('19');
  });
});
