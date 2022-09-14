import { renderHookWithProviders } from 'testHelpers';
import { useGameRound, useGameActions } from 'store/game/game.hooks';
import { act } from '@testing-library/react';
import { MOCK_APP_STATE } from 'store/mocks/app-state.mocks';
import { useGameSelectors } from './game.hooks';

describe('Game State Hooks', () => {
  describe('useGameRound', () => {
    it('should return the current round', () => {
      const { result } = renderHookWithProviders(() => useGameRound(), {
        preloadedState: MOCK_APP_STATE,
      });
      const [currentRound] = result.current;

      expect(currentRound).toEqual(MOCK_APP_STATE.game.round);
    });

    it('incrementRound should increase the round by 1', () => {
      const { result } = renderHookWithProviders(() => useGameRound());
      let [currentRound, { incrementRound }] = result.current;

      expect(currentRound).toEqual(1);

      act(() => {
        incrementRound();
      });

      [currentRound] = result.current;
      expect(currentRound).toEqual(2);
    });

    it('should return dialog stage of action', () => {
      const { result } = renderHookWithProviders(() => useGameSelectors());
      const { dialogStage } = result.current;

      expect(dialogStage).toEqual('action');
    });

    it('should set the difficulty to easy', () => {
      const { result, store } = renderHookWithProviders(() => useGameActions());
      const { setDifficulty } = result.current;

      expect(store.getState().game.difficulty).toEqual(undefined);

      act(() => {
        setDifficulty('easy');
      });

      expect(store.getState().game.difficulty).toEqual('easy');
    });
  });
});
