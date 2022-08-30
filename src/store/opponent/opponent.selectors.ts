import { RootState } from 'store/index';
import { createSelector } from '@reduxjs/toolkit';
import { DifficultyType } from 'store/game/game.slice';

export const opponentSelector = (state: RootState) => state.opponent;

export const opponentMaxHealthSelector = createSelector(
  opponentSelector,
  (opponent): number | undefined => opponent.maxHealth
);

export const opponentCurrentHealthSelector = createSelector(
  opponentSelector,
  (opponent): number => opponent.currentHealth
);

export const opponentAttackValueSelector = createSelector(
  opponentSelector,
  (opponent): number => opponent.attackValue
);

export const opponentSetDifficultySelector = createSelector(
  opponentSelector,
  (opponent): DifficultyType => opponent.difficulty
);
