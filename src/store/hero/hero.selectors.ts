import { RootState } from 'store/index';
import { createSelector } from '@reduxjs/toolkit';

export const heroSelector = (state: RootState) => state.hero;

export const maxHealthSelector = createSelector(
  heroSelector,
  (heroState): number => heroState.maxHealth
);

export const currentHealthSelector = createSelector(
  heroSelector,
  (heroState): number => heroState.currentHealth
);

export const heroAttackValueSelector = createSelector(
  heroSelector,
  (heroState): number => heroState.attackValue
);

// selector is for action
// slice will be holding a value and passing it to the component
