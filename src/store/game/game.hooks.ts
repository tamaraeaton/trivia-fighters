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
  playingSelector,
  winSelector,
  defeatSelector,
} from 'store/game/game.selectors';
import {
  answered,
  answeredVerify,
  difficulty,
  DifficultyType,
  setRound,
  attackStrength,
  AttackPowerType,
  attack,
  block,
} from 'store/game/game.slice';

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
  const playing = useAppSelector(playingSelector);
  const win = useAppSelector(winSelector);
  const defeat = useAppSelector(defeatSelector);

  return {
    dialogStage,
    action,
    difficulty,
    attackStrength,
    question,
    isCorrect,
    playing,
    win,
    defeat,
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

  const setNextRoundAnswer = useCallback(
    (option: string) => {
      dispatch(answeredVerify(option));
    },
    [dispatch]
  );

  const setDifficulty = useCallback(
    (option: DifficultyType) => {
      dispatch(difficulty(option));
    },
    [dispatch]
  );

  const setAttackStrength = useCallback(
    (option: AttackPowerType) => {
      dispatch(attackStrength(option));
    },
    [dispatch]
  );

  const setActionToBlock = useCallback(() => {
    dispatch(block());
  }, [dispatch]);

  const setActionToAttack = useCallback(() => {
    dispatch(attack());
  }, [dispatch]);

  return {
    setAnswered,
    setNextRoundAnswer,
    setDifficulty,
    setAttackStrength,
    setActionToBlock,
    setActionToAttack,
  };
};

// hooks are functions to execute my actions
