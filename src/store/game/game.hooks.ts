import { useCallback } from 'react';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { gameRoundSelector } from 'store/game/game.selectors';
import { setRound } from 'store/game/game.slice';

export const useGameRound = () => {
  const currentRound = useAppSelector(gameRoundSelector);
  const dispatch = useAppDispatch();

  const incrementRound = useCallback(() => {
    dispatch(setRound(currentRound + 1));
  }, [currentRound, dispatch]);

  return {
    currentRound,
    incrementRound,
  };
};
