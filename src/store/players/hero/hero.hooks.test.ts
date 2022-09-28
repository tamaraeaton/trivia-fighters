import { renderHookWithProviders } from 'testHelpers';
import { MOCK_APP_STATE } from 'store/mocks/app-state.mocks';
import { useHero } from '../hero/hero.hooks';
import { act } from 'react-dom/test-utils';

describe('Hero Hooks tests', () => {
  it('should apply correct attack value to hero when answer is correct', () => {
    const { result, store } = renderHookWithProviders(() => useHero(), {
      preloadedState: {
        game: {
          ...MOCK_APP_STATE.game,
          action: 'attack',
          dialogStage: 'answered',
          attackStrength: 'heavy',
          isCorrect: true,
        },
        hero: {
          ...MOCK_APP_STATE.hero,
        },
      },
    });
    const { applyHeroAttackValue } = result.current;

    expect(store.getState().hero.attackValue).toEqual(5);

    act(() => {
      applyHeroAttackValue();
    });

    expect(store.getState().hero.attackValue).toEqual(20);
  });

  it('should decrease opponent health with hero attack value when answer is incorrect', () => {
    const { result, store } = renderHookWithProviders(() => useHero(), {
      preloadedState: {
        game: {
          ...MOCK_APP_STATE.game,
          action: 'attack',
          dialogStage: 'answered',
          isCorrect: false,
        },
        hero: {
          ...MOCK_APP_STATE.hero,
          attackValue: 40,
        },
        opponent: {
          ...MOCK_APP_STATE.opponent,
        },
      },
    });
    const { applyHeroAttackValue } = result.current;

    expect(store.getState().opponent.currentHealth).toEqual(100);

    act(() => {
      applyHeroAttackValue();
    });

    expect(store.getState().opponent.currentHealth).toEqual(60);
  });

  it('should increase hero current health when blocking and the answer is correct', () => {
    const { result, store } = renderHookWithProviders(() => useHero(), {
      preloadedState: {
        game: {
          ...MOCK_APP_STATE.game,
          action: 'block',
          dialogStage: 'answered',
          isCorrect: true,
        },
        hero: {
          ...MOCK_APP_STATE.hero,
          currentHealth: 50,
        },
        opponent: {
          ...MOCK_APP_STATE.opponent,
        },
      },
    });
    const { setHeroCurrentHealth } = result.current;

    expect(store.getState().hero.currentHealth).toEqual(50);

    act(() => {
      setHeroCurrentHealth();
    });

    expect(store.getState().hero.currentHealth).toEqual(60);
  });
});
