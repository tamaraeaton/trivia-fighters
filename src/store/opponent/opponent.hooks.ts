import { useAppDispatch, useAppSelector } from 'store/hooks';
import {
  opponentMaxHealthSelector,
  opponentCurrentHealthSelector,
  opponentAttackValueSelector,
} from './opponent.selectors';
import {
  maxHealth,
  currentHealth,
  attackValue,
} from 'store/opponent/opponent.slice';
import { isCorrectSelector, actionSelector } from 'store/game/game.selectors';
import { DifficultyType } from 'store/game/game.slice';
import { decreaseHeroCurrentHealth } from '../hero/hero.slice';

export const useOpponentSelectors = () => {
  const opponentMaxHealth = useAppSelector(opponentMaxHealthSelector);
  const opponentCurrentHealth = useAppSelector(opponentCurrentHealthSelector);
  const opponentAttackValue = useAppSelector(opponentAttackValueSelector);

  return {
    opponentMaxHealth,
    opponentCurrentHealth,
    opponentAttackValue,
  };
};

export const useOpponentActions = () => {
  const dispatch = useAppDispatch();
  const isCorrect = useAppSelector(isCorrectSelector);
  const opponentAttackValue = useAppSelector(opponentAttackValueSelector);
  const action = useAppSelector(actionSelector);

  const applyOpponentAttackValue = () => {
    if (!isCorrect && (action === 'block' || action === 'attack')) {
      dispatch(decreaseHeroCurrentHealth(opponentAttackValue));
      dispatch(attackValue(0));
    }
  };

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

  return {
    applyOpponentAttackValue,
    setOpponentsGameHealth,
    setOpponentAttackValue,
  };
};
