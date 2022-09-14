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
import { DifficultyType } from 'store/game/game.slice';
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
    if (option === 'easy') {
      dispatch(maxHealth(100));
      dispatch(currentHealth(100));
    } else if (option === 'medium') {
      dispatch(maxHealth(150));
      dispatch(currentHealth(150));
    } else {
      dispatch(maxHealth(200));
      dispatch(currentHealth(200));
    }
  };

  const setOpponentAttackValue = (option: DifficultyType) => {
    let min = Math.ceil(5);
    let max = Math.floor(1);
    const randomOneThruFive = Math.floor(Math.random() * (max - min + 1)) + min;

    if (option === 'easy') {
      let easyAttack = 1 + 1 * randomOneThruFive;
      dispatch(attackValue(easyAttack));
    } else if (option === 'medium') {
      let mediumAttack = 5 + 2 * randomOneThruFive;
      dispatch(attackValue(mediumAttack));
    } else {
      let sethAttack = 10 + 3 * randomOneThruFive;
      dispatch(attackValue(sethAttack));
    }
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
