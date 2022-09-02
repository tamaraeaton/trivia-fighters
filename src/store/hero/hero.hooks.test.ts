import { renderHookWithProviders } from 'testHelpers';
import { act } from '@testing-library/react';
import { useHeroActions } from './hero.hooks';

describe('Hero Hooks test', () => {
  it('should dispatch health accordingly to difficulty selected', () => {
    const { result, store } = renderHookWithProviders(() => useHeroActions());
    const { setHeroGameHealth } = result.current;
    expect(store.getState().hero.maxHealth).toEqual(0);
    act(() => {
      setHeroGameHealth();
    });
    expect(store.getState().hero.maxHealth).toEqual(100);
  });
});
