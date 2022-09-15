import { useCallback, useMemo } from 'react';
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
import { useOpponent } from '../players/opponent/opponent.hooks';
import { useHero } from '../players/hero/hero.hooks';
import { resetHeroState } from '../players/hero/hero.slice';
import { resetOpponentState } from '../players/opponent/opponent.slice';
import { MESSAGES } from 'const/Messages';

export type UseGameRoundResult = [number, { incrementRound: () => void }];

export const useGameRound = (): UseGameRoundResult => {
  const currentRound = useAppSelector(gameRoundSelector);
  const dispatch = useAppDispatch();

  // Memoize (fancy name for cache)
  // cache my function
  const incrementRound = useCallback(() => {
    dispatch(setRound(currentRound + 1));
  }, [currentRound, dispatch]);
  return [currentRound, { incrementRound }];
};

const useGameDetails = () => {
  const dialogStage = useAppSelector(dialogStageSelector);
  const isCorrect = useAppSelector(isCorrectSelector);
  const action = useAppSelector(actionSelector);
  const attackPower = useAppSelector(attackStrengthSelector);

  const dialogMessage = useMemo(() => {
    const messageStage = MESSAGES.dialogStage;

    if (dialogStage === 'action') {
      return messageStage.action;
    }
    if (dialogStage === 'attacking') {
      return messageStage.attacking;
    }
    if (dialogStage === 'answered') {
      if (isCorrect) {
        return messageStage.answered.correct;
      }
      return messageStage.answered.incorrect;
    }
    if (dialogStage === 'answering') {
      if (action === 'attack') {
        if (attackPower === 'light') {
          return messageStage.answering.attack.light;
        } else if (attackPower === 'heavy') {
          return messageStage.answering.attack.heavy;
        } else {
          return messageStage.answering.attack.medium;
        }
      }
      return messageStage.answering.block;
    }
  }, [dialogStage, isCorrect, action, attackPower]);

  const helpMessage = useMemo(() => {
    const messageStage = MESSAGES.dialogStage;
    if (dialogStage === 'action') {
      return messageStage.action;
    }
    if (dialogStage === 'attacking') {
      return messageStage.attacking;
    }
    if (dialogStage === 'answered') {
      if (isCorrect) {
        if (action === 'attack') {
          return messageStage.answered.correct.attack;
        } else {
          return messageStage.answered.correct.block;
        }
      } else {
        return messageStage.answered.incorrect;
      }
    }
    if (dialogStage === 'answering') {
      if (action === 'block') {
        return messageStage.answering.block;
      } else {
        return messageStage.answering.attack;
      }
    }
  }, [action, dialogStage, isCorrect]);

  return {
    dialogMessage: dialogMessage?.dialogMessage,
    helpMessage: helpMessage?.helpMessage,
  };
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
  const details = useGameDetails();
  const gameRoundData = useGameRound();

  return {
    ...data,
    ...actions,
    ...details,
    round: gameRoundData,
  };
};

// hooks are functions to execute my actions
