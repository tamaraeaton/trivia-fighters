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
import { attackValue, currentHealth } from './hero.slice';
import {
  useOpponent,
  useOpponentActions,
  useOpponentSelectors,
} from 'store/opponent/opponent.hooks';
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

const useHeroActions = () => {
  const dispatch = useAppDispatch();
  const action = useAppSelector(actionSelector);
  const attackStrengthValue = useAppSelector(attackStrengthSelector);
  const isCorrect = useAppSelector(isCorrectSelector);
  const heroCurrentHealth = useAppSelector(currentHealthSelector);
  const { opponentAttackValue } = useOpponentSelectors();
  const { setOpponentCurrentHealth } = useOpponentActions();

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
        setOpponentCurrentHealth();
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

  return { applyHeroAttackValue, setHeroCurrentHealth };
};

export const useHero = () => {
  const data = useHeroSelectors();
  const actions = useHeroActions();
  return {
    ...data,
    ...actions,
  };
};
