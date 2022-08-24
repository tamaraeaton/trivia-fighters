import { RootState } from 'store/index';
import { createSelector } from '@reduxjs/toolkit';

export const heroSelector = (state: RootState) => state.hero;

export const maxHealthSelector = createSelector(
  heroSelector,
  (heroState): number | undefined => heroState.maxHealth
);

export const currentHealthSelector = createSelector(
  heroSelector,
  (heroState): number | undefined => heroState.currentHealth
);

export const attackValueSelector = createSelector(
  heroSelector,
  (heroState): number | undefined => heroState.attackValue
);
