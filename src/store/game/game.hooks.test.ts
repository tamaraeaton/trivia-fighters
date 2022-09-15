import { renderHookWithProviders } from 'testHelpers';
import { act } from '@testing-library/react';
import { MOCK_APP_STATE } from 'store/mocks/app-state.mocks';
import { useGameUI, useGameRound } from './game.hooks';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

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
      const { result } = renderHookWithProviders(() => useGameUI());
      const { dialogStage } = result.current;

      expect(dialogStage).toEqual('action');
    });

    it('should set the difficulty to easy', () => {
      const { result, store } = renderHookWithProviders(() => useGameUI());
      const { setDifficulty } = result.current;

      expect(store.getState().game.difficulty).toEqual(undefined);

      act(() => {
        setDifficulty('easy');
      });

      expect(store.getState().game.difficulty).toEqual('easy');
    });
  });
});
