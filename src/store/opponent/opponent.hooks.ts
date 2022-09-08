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
  decreaseOpponentHealth,
} from 'store/opponent/opponent.slice';
import {
  isCorrectSelector,
  actionSelector,
  difficultySelector,
} from 'store/game/game.selectors';
import { DifficultyType } from 'store/game/game.slice';
// import {} from '../hero/hero.slice'
import { useHero, useHeroSelectors } from '../hero/hero.hooks';
import { OPPONENTS } from 'const/Opponents';

const useOpponentDetails = () => {
  const difficulty = useAppSelector(difficultySelector);
  // const { difficulty } = useGameSelectors();

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
  // const { action, isCorrect } = useGameSelectors();
  const { opponentCurrentHealth } = useOpponentSelectors();
  const { heroAttackValue } = useHeroSelectors();
  // const { setHeroCurrentHealth } = useHeroActions();
  // const { heroAttackValue } = useHero();

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
    decreaseOpponentHealth(heroAttackValue);
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
  // const { useGameSelectors } = useGameUI();
  const data = useOpponentSelectors();
  const details = useOpponentDetails();
  const actions = useOpponentActions();

  return {
    ...data,
    ...details,
    ...actions,
  };
};
