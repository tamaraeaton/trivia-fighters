import { RootState } from 'store/index';
import { createSelector } from '@reduxjs/toolkit';

export const heroSelector = (state: RootState) => state.hero;

export const maxHealthSelector = createSelector(
  heroSelector,
  (hero): number => hero.maxHealth
);

export const currentHealthSelector = createSelector(
  heroSelector,
  (hero): number => hero.currentHealth
);

export const heroAttackValueSelector = createSelector(
  heroSelector,
  (hero): number => hero.attackValue
);

// selector is for action
// slice will be holding a value and passing it to the component
