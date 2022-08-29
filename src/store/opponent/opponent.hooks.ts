import {
  opponentMaxHealthSelector,
  opponentCurrentHealthSelector,
  opponentAttackValueSelector,
  opponentSetDifficultySelector,
} from './opponent.selectors';
import { useAppSelector } from 'store/hooks';

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
