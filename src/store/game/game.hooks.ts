import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import {
  gameRoundSelector,
  actionSelector,
  attackStrengthSelector,
  dialogStageSelector,
  difficultySelector,
  isCorrectSelector,
  questionSelector,
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
  gameStatus,
  resetGameState,
} from 'store/game/game.slice';
import { useOpponent } from '../opponent/opponent.hooks';
import { useHero } from '../hero/hero.hooks';
import { resetHeroState } from '../hero/hero.slice';
import { resetOpponentState } from '../opponent/opponent.slice';

export type UseGameRoundResult = [number, { incrementRound: () => void }];

const useGameRound = (): UseGameRoundResult => {
  const currentRound = useAppSelector(gameRoundSelector);
  const dispatch = useAppDispatch();

  const incrementRound = useCallback(() => {
    dispatch(setRound(currentRound + 1));
  }, [currentRound, dispatch]);

  return [currentRound, { incrementRound }];
};

const useGameSelectors = () => {
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

const useGameActions = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { opponentCurrentHealth, opponentAttackValue } = useOpponent();
  const { heroCurrentHealth, heroAttackValue } = useHero();

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

  const setGameStatus = useCallback(() => {
    if (
      opponentCurrentHealth <= 0 ||
      heroAttackValue >= opponentCurrentHealth
    ) {
      dispatch(gameStatus('victory'));
      navigate('/victory');
    }
    if (heroCurrentHealth <= 0 || opponentAttackValue >= heroCurrentHealth) {
      dispatch(gameStatus('defeat'));
      navigate('/defeat');
    }
    return gameStatus;
  }, [
    dispatch,
    navigate,
    heroCurrentHealth,
    opponentCurrentHealth,
    heroAttackValue,
    opponentAttackValue,
  ]);

  const setResetGame = () => {
    dispatch(resetHeroState());
    dispatch(resetOpponentState());
    dispatch(resetGameState());
    navigate('/');
  };

  return {
    useGameRound,
    setAnswered,
    setNextRoundAnswer,
    setDifficulty,
    setAttackStrength,
    setActionToBlock,
    setActionToAttack,
    setGameStatus,
    setResetGame,
  };
};

export const useGameUI = () => {
  const data = useGameSelectors();
  const actions = useGameActions();

  return {
    ...data,
    ...actions,
  };
};

// hooks are functions to execute my actions
