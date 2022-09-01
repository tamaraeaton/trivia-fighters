import {
  opponentMaxHealthSelector,
  opponentCurrentHealthSelector,
  opponentAttackValueSelector,
  opponentSetDifficultySelector,
} from './opponent.selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { isCorrectSelector, actionSelector } from 'store/game/game.selectors';
import { decreaseHeroCurrentHealth, attackValue } from '../hero/hero.slice';

export const useOpponentSelectors = () => {
  const opponentMaxHealth = useAppSelector(opponentMaxHealthSelector);
  const opponentCurrentHealth = useAppSelector(opponentCurrentHealthSelector);
  const opponentAttackValue = useAppSelector(opponentAttackValueSelector);
  const opponentSetDifficulty = useAppSelector(opponentSetDifficultySelector);

  return {
    opponentMaxHealth,
    opponentCurrentHealth,
    opponentAttackValue,
    opponentSetDifficulty,
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
  return { applyOpponentAttackValue };
};
