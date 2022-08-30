import {
  opponentMaxHealthSelector,
  opponentCurrentHealthSelector,
  opponentAttackValueSelector,
  opponentSetDifficultySelector,
} from './opponent.selectors';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { isCorrectSelector } from 'store/game/game.selectors';
import { decreaseHeroCurrentHealth } from '../hero/hero.slice';

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

  const applyOpponentAttackValue = () => {
    // * If the answer is not correct
    // * Subtract opponent.attackValue from hero.currentHealth
    // *** Attack value will be based on difficulty, which will be done in the next Story - for this Story, use a hard-coded 5
    if (!isCorrect) {
      dispatch(decreaseHeroCurrentHealth(opponentAttackValue));
    }
  };
  return { applyOpponentAttackValue };
};
