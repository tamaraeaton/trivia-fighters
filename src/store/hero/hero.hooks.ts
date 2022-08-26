import { useCallback } from 'react';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { setMaxHealth, setCurrentHealth, setAttackValue } from './hero.slice';
// might need import here for answered to dispatch or use from here

// export const useHeroSelectors = () => {
//   const heroMaxHealth = useAppSelector(setMaxHealthSelector);
//   const heroCurrentHealth = useAppSelector(setCurrentHealthSelector);
// };
