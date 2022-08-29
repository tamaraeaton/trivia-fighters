import { RootState } from 'store/index';
import { createSelector } from '@reduxjs/toolkit';
import { DifficultyType } from 'store/game/game.slice';

export const opponentSelector = (state: RootState) => state.opponent;

export const opponentMaxHealthSelector = createSelector(
  opponentSelector,
  (opponentState): number | undefined => opponentState.maxHealth
);

export const opponentCurrentHealthSelector = createSelector(
  opponentSelector,
  (opponentState): number => opponentState.currentHealth
);

export const opponentAttackValueSelector = createSelector(
  opponentSelector,
  (opponentState): number | undefined => opponentState.attackValue
);

export const opponentSetDifficultySelector = createSelector(
  opponentSelector,
  (opponentState): DifficultyType => opponentState.difficulty
);
