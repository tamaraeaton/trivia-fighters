import { renderHookWithProviders } from 'testHelpers';
import { MOCK_APP_STATE } from 'store/mocks/app-state.mocks';
import { useOpponent } from '../opponent/opponent.hooks';
import { act } from 'react-dom/test-utils';

describe('Opponent Hooks tests', () => {
  let randomSpy: jest.SpyInstance;

  beforeEach(() => {
    randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.5);
  });
  afterEach(() => {
    randomSpy.mockRestore();
  });

  it('should set opponent current health to difficulty type', () => {
    const { result, store } = renderHookWithProviders(() => useOpponent(), {
      preloadedState: {
        game: {
          ...MOCK_APP_STATE.game,
          action: 'none',
          dialogStage: 'action',
        },
        opponent: {
          ...MOCK_APP_STATE.opponent,
        },
      },
    });
    const { setOpponentsGameHealth } = result.current;

    expect(store.getState().opponent.currentHealth).toEqual(100);

    act(() => {
      setOpponentsGameHealth('seth');
    });

    expect(store.getState().opponent.currentHealth).toEqual(200);
  });

  it('should randomly set opponent attack value per difficulty type', () => {
    const { result, store } = renderHookWithProviders(() => useOpponent(), {
      preloadedState: {
        game: {
          ...MOCK_APP_STATE.game,
          action: 'attack',
          dialogStage: 'attacking',
        },
        opponent: {
          ...MOCK_APP_STATE.opponent,
          attackValue: 0,
        },
      },
    });
    const { setOpponentAttackValue } = result.current;

    expect(store.getState().opponent.attackValue).toEqual(0);

    act(() => {
      setOpponentAttackValue('easy');
    });

    expect(store.getState().opponent.attackValue).toEqual(4);
  });
});
