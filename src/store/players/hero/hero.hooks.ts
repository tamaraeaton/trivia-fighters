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
  decreaseHeroCurrentHealth,
  increaseHeroCurrentHealth,
} from './hero.slice';
import { useOpponentSelectors } from 'store/players/opponent/opponent.hooks';
import { decreaseOpponentHealth } from '../opponent/opponent.slice';

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
  const { opponentAttackValue } = useOpponentSelectors();
  const heroAttackValue = useAppSelector(heroAttackValueSelector);

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
        // eslint-disable-next-line react-hooks/rules-of-hooks
        dispatch(decreaseOpponentHealth(heroAttackValue));
        console.log(heroAttackValue);
        dispatch(attackValue(0));
      }
    }
  };

  const setHeroCurrentHealth = () => {
    if (!!isCorrect && action === 'block') {
      dispatch(increaseHeroCurrentHealth());
    } else {
      dispatch(decreaseHeroCurrentHealth(opponentAttackValue));
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
