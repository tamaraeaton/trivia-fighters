import React, { FunctionComponent } from 'react';
import { useAppDispatch } from 'store/hooks';
import { useGameUI } from 'store/game/game.hooks';
import { useHero } from '../store/players/hero/hero.hooks';
import { useOpponent } from '../store/players/opponent/opponent.hooks';
import { useCallback } from 'react';

// export const useActions = () => {
//   const dispatch = useAppDispatch();
//   const { isCorrect, action } = useGameUI();
//   const {
//     opponentCurrentHealth,
//     opponentAttackValue,
//     setOpponentCurrentHealth,
//   } = useOpponent();
//   const { heroCurrentHealth, heroAttackValue } = useHero();

//   return {
//     setOpponent,
//   };
// };

// const useSetHero = () => {
//   const { isCorrect, action, attackStrength } = useGameUI();
//   const { opponentCurrentHealth, setOpponentCurrentHealth } = useOpponent();
//   const { heroAttackValue, setHeroAttackValue } = useHero();

//   if (action === 'attack' && isCorrect !== undefined) {
//     if (isCorrect) {
//       if (attackStrength === 'light') {
//         setHeroAttackValue(5);
//       }
//       if (attackStrength === 'medium') {
//         setHeroAttackValue(10);
//         // dispatch(attackValue(10));
//       }
//       if (attackStrength === 'heavy') {
//         setHeroAttackValue(15);
//         // dispatch(attackValue(15));
//       }
//     } else {
//       // eslint-disable-next-line react-hooks/rules-of-hooks
//       setOpponentCurrentHealth(
//         Math.max(opponentCurrentHealth - heroAttackValue, 0)
//       );
//       setHeroAttackValue(0);
//       // dispatch(attackValue(0));
//     }
//   }
//   return useSetHero;
// };

const useSetOpponent = () => {
  // const {isCorrect} = useGameUI()
  const { isCorrect, action } = useGameUI();
  const { opponentCurrentHealth, setOpponentCurrentHealth } = useOpponent();
  const { heroAttackValue } = useHero();

  // if (action === 'attack' && isCorrect !== undefined) {
  //   setOpponentCurrentHealth(
  //     Math.max(opponentCurrentHealth - heroAttackValue, 0)
  //   );
  // }

  return { useSetOpponent };
};

export const useActions = () => {
  const opponent = useSetOpponent();
  // const hero = useSetHero();

  return {
    ...opponent,
    // ...hero,
  };
};
