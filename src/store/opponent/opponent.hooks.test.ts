import { renderHookWithProviders } from 'testHelpers';
import { act } from '@testing-library/react';
import { useOpponentActions } from './opponent.hooks';

describe('Opponent Hooks test', () => {
  it('should dispatch health accordingly to difficulty selected', () => {
    const { result, store } = renderHookWithProviders(() =>
      useOpponentActions()
    );
    const { setOpponentsGameHealth } = result.current;
    expect(store.getState().opponent.maxHealth).toEqual(100);
    act(() => {
      setOpponentsGameHealth('seth');
    });
    expect(store.getState().opponent.maxHealth).toEqual(200);
  });
});
