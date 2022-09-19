import { RootState } from 'store/index';
import { createSelector } from '@reduxjs/toolkit';

export const opponentSelector = (state: RootState) => state.opponent;

export const opponentMaxHealthSelector = createSelector(
  opponentSelector,
  (opponent): number => opponent.maxHealth
);

export const opponentCurrentHealthSelector = createSelector(
  opponentSelector,
  (opponent): number => opponent.currentHealth
);

export const opponentAttackValueSelector = createSelector(
  opponentSelector,
  (opponent): number => opponent.attackValue
);
