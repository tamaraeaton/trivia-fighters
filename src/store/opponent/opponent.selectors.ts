import { RootState } from 'store/index';
import { createSelector } from '@reduxjs/toolkit';

export const opponentSelector = (state: RootState) => state.opponent;

export const maxHealthSelector = createSelector(
  opponentSelector,
  (opponentState): number | undefined => opponentState.maxHealth
);

export const currentHealthSelector = createSelector(
  opponentSelector,
  (opponentState): number | undefined => opponentState.currentHealth
);

export const attackValueSelector = createSelector(
  opponentSelector,
  (opponentState): number | undefined => opponentState.attackValue
);
