import {
  actionSelector,
  attackStrengthSelector,
  isCorrectSelector,
} from 'store/game/game.selectors';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import {
  heroAttackValueSelector,
  maxHealthSelector,
  currentHealthSelector,
} from './hero.selectors';
import { attackValue } from './hero.slice';

import { decreaseOpponentHealth } from 'store/opponent/opponent.slice';

export const useHeroSelectors = () => {
  const heroMaxHealth = useAppSelector(maxHealthSelector);
  const heroCurrentHealth = useAppSelector(currentHealthSelector);
  const heroAttackValue = useAppSelector(heroAttackValueSelector);

  return {
    heroMaxHealth,
    heroCurrentHealth,
    heroAttackValue,
  };
};
export const useHeroActions = () => {
  const dispatch = useAppDispatch();
  const action = useAppSelector(actionSelector);
  const attackStrengthValue = useAppSelector(attackStrengthSelector);
  const isCorrect = useAppSelector(isCorrectSelector);
  const heroAttackValue = useAppSelector(heroAttackValueSelector);

  const applyHeroAttackValue = () => {
    if (action === 'attack') {
      if (isCorrect) {
        if (attackStrengthValue === 'light') {
          dispatch(attackValue(5));
        }
        if (attackStrengthValue === 'medium') {
          dispatch(attackValue(10));
        }
        if (attackStrengthValue === 'heavy') {
          dispatch(attackValue(15));
        }
      } else {
        dispatch(decreaseOpponentHealth(heroAttackValue || 0));
        dispatch(attackValue(0));
      }
    }
  };

  return { applyHeroAttackValue };
};
