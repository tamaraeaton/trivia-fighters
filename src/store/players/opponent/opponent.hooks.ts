import { useMemo } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  maxHealthSelector,
  currentHealthSelector,
  attackValueSelector,
} from './opponent.selectors';
import {
  maxHealth,
  currentHealth,
  attackValue,
} from 'store/players/opponent/opponent.slice';
import {
  isCorrectSelector,
  actionSelector,
  difficultySelector,
} from 'store/game/game.selectors';
import { difficulty, DifficultyType } from 'store/game/game.slice';
import { decreaseHeroCurrentHealth } from '../hero/hero.slice';
import { heroAttackValueSelector } from '../hero/hero.selectors';
import { OPPONENTS } from 'const/Opponents';

const useOpponentDetails = () => {
  const difficulty = useAppSelector(difficultySelector);

  const opponentData = useMemo(() => {
    if (difficulty) {
      return OPPONENTS[difficulty];
    }
    return undefined;
  }, [difficulty]);
  return {
    opponentName: opponentData?.displayName,
  };
};

export const useOpponentSelectors = () => {
  const opponentMaxHealth = useAppSelector(maxHealthSelector);
  const opponentCurrentHealth = useAppSelector(currentHealthSelector);
  const opponentAttackValue = useAppSelector(attackValueSelector);

  return {
    opponentMaxHealth,
    opponentCurrentHealth,
    opponentAttackValue,
  };
};

export const useOpponentActions = () => {
  const dispatch = useAppDispatch();
  const isCorrect = useAppSelector(isCorrectSelector);
  const action = useAppSelector(actionSelector);
  const { opponentCurrentHealth, opponentAttackValue } = useOpponentSelectors();
  const heroAttackValue = useAppSelector(heroAttackValueSelector);

  const setOpponentsGameHealth = (option: DifficultyType) => {
    const data = OPPONENTS[option];
    dispatch(maxHealth(data.maxHealth));
    dispatch(currentHealth(data.maxHealth));
  };

  const setOpponentAttackValue = (option: DifficultyType) => {
    const randomOneThruFive = Math.floor(Math.random() * (5 - 1)) + 1;
    const data = OPPONENTS[option];

    let attackTotal =
      data.attackBase + data.attackMultiplier * randomOneThruFive;

    dispatch(attackValue(attackTotal));
  };

  const applyOpponentAttackValue = () => {
    if ((action === 'block' || action === 'attack') && isCorrect === false) {
      dispatch(decreaseHeroCurrentHealth(opponentAttackValue));
    }

    dispatch(attackValue(0));
  };

  const setOpponentCurrentHealth = () => {
    if (action === 'attack' && isCorrect !== undefined) {
      dispatch(
        currentHealth(Math.max(opponentCurrentHealth - heroAttackValue, 0))
      );
    }
  };

  return {
    applyOpponentAttackValue,
    setOpponentsGameHealth,
    setOpponentAttackValue,
    setOpponentCurrentHealth,
  };
};
export const useOpponent = () => {
  const data = useOpponentSelectors();
  const details = useOpponentDetails();
  const actions = useOpponentActions();

  return {
    ...data,
    ...details,
    ...actions,
  };
};
