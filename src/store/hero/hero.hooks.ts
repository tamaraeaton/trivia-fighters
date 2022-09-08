import { useCallback } from 'react';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import {
  actionSelector,
  attackStrengthSelector,
  isCorrectSelector,
} from 'store/game/game.selectors';
import {
  heroAttackValueSelector,
  maxHealthSelector,
  currentHealthSelector,
} from './hero.selectors';
import {
  attackValue,
  // increaseHeroCurrentHealth,
  currentHealth,
  maxHealth,
} from './hero.slice';
import { useOpponent } from 'store/opponent/opponent.hooks';

export const useHero = () => {
  const useHeroSelectors = () => {
    const heroMaxHealth = useAppSelector(maxHealthSelector);
    const heroCurrentHealth = useAppSelector(currentHealthSelector);
    const heroAttackValue = useAppSelector(heroAttackValueSelector);

    return {
      heroMaxHealth,
      heroCurrentHealth,
      heroAttackValue,
    };
  };
  const useHeroActions = () => {
    const dispatch = useAppDispatch();
    const action = useAppSelector(actionSelector);
    const attackStrengthValue = useAppSelector(attackStrengthSelector);
    const isCorrect = useAppSelector(isCorrectSelector);
    // const heroAttackValue = useAppSelector(heroAttackValueSelector);
    const heroCurrentHealth = useAppSelector(currentHealthSelector);
    const { useOpponentSelectors } = useOpponent();
    const { opponentAttackValue } = useOpponentSelectors();

    // this is when you are on the question dialog, not clicking Next
    const applyHeroAttackValue = () => {
      if (action === 'attack' && isCorrect !== undefined) {
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
          dispatch(attackValue(0));
        }
      }
    };

    const setHeroCurrentHealth = () => {
      if (isCorrect && action === 'block') {
        dispatch(currentHealth(Math.min(heroCurrentHealth + 10, 100)));
      } else {
        dispatch(
          currentHealth(Math.max(heroCurrentHealth - opponentAttackValue, 0))
        );
      }
    };

    // the setHeroHealth can be combined (see both below)
    // const increaseHeroHealth = () => {
    //   if (isCorrect && action === 'block') {
    //     dispatch(currentHealth(heroCurrentHealth + 10));
    //   }
    // };

    // TODO: pass in initialState
    const setHeroGameHealth = useCallback(() => {
      dispatch(currentHealth(100));
      dispatch(maxHealth(100));
    }, [dispatch]);

    return { applyHeroAttackValue, setHeroCurrentHealth, setHeroGameHealth };
  };
  return {
    useHeroSelectors,
    useHeroActions,
  };
};
