import { useCallback } from 'react';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import {
  actionSelector,
  attackStrengthSelector,
  dialogStageSelector,
  difficultySelector,
  gameRoundSelector,
  isCorrectSelector,
  questionSelector,
} from 'store/game/game.selectors';
import { answered, attackStrength, setRound } from 'store/game/game.slice';

export type UseGameRoundResult = [number, { incrementRound: () => void }];

export const useGameRound = (): UseGameRoundResult => {
  const currentRound = useAppSelector(gameRoundSelector);
  const dispatch = useAppDispatch();

  const incrementRound = useCallback(() => {
    dispatch(setRound(currentRound + 1));
  }, [currentRound, dispatch]);

  return [currentRound, { incrementRound }];
};

export const useGameSelectors = () => {
  const dialogStage = useAppSelector(dialogStageSelector);
  const action = useAppSelector(actionSelector);
  const difficulty = useAppSelector(difficultySelector);
  const attackStrength = useAppSelector(attackStrengthSelector);
  const question = useAppSelector(questionSelector);
  const isCorrect = useAppSelector(isCorrectSelector);
  return {
    dialogStage,
    action,
    difficulty,
    attackStrength,
    question,
    isCorrect,
  };
};

export const useGameActions = () => {
  const dispatch = useAppDispatch();

  const setAnswered = useCallback(
    (option: string) => {
      dispatch(answered(option));
    },
    [dispatch]
  );

  return {
    setAnswered,
  };
};

// hooks are functions to execute my actions
