// import { useCallback } from 'react';
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
import {
  isCorrectSelector,
  actionSelector,
  dialogStageSelector,
  difficultySelector,
} from 'store/game/game.selectors';
import { answered, DifficultyType } from 'store/game/game.slice';
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
  const dialogStage = useAppSelector(dialogStageSelector);
  let difficulty = useAppSelector(difficultySelector);

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
    // dispatch(answered());

    let min = Math.ceil(5);
    let max = Math.floor(1);
    const randomOneThruFive = Math.floor(Math.random() * (max - min + 1)) + min;

    // When answered action is triggered
    // If answer is wrong ***after applying damage*** ?
    // If state action is equal to block AND answer is correct
    // if (
    //   dialogStage === 'difficulty' ||
    //   (dialogStage === 'answered' && !isCorrect) ||
    //   (isCorrect && action === 'block')
    // ) {
    console.log(isCorrect);
    if (option === 'easy') {
      let easyAttack = 1 + 1 * randomOneThruFive;
      dispatch(attackValue(easyAttack));

      // Minimum attack is 1 plus
      // -- Additional attack 1 * (1-5 randomly)
    } else if (option === 'medium') {
      let mediumAttack = 5 + 2 * randomOneThruFive;
      dispatch(attackValue(mediumAttack));
      // Minimum attack is 5 plus
      // -- Additional attack 2 * (1-5 randomly)
    } else {
      let sethAttack = 10 + 3 * randomOneThruFive;
      dispatch(attackValue(sethAttack));
      // Minimum attack is 10 plus
      // -- Additional attack 3 * (1-5 randomly)
    }
    // }
  };

  return {
    applyOpponentAttackValue,
    setOpponentsGameHealth,
    setOpponentAttackValue,
  };
};
