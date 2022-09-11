import { RootState } from 'store/index';
import { createSelector } from '@reduxjs/toolkit';

export const opponentSelector = (state: RootState) => state.opponent;

export const maxHealthSelector = createSelector(
  opponentSelector,
  (opponent): number => opponent.maxHealth
);

export const currentHealthSelector = createSelector(
  opponentSelector,
  (opponent): number => opponent.currentHealth
);

export const attackValueSelector = createSelector(
  opponentSelector,
  (opponent): number => opponent.attackValue
);
