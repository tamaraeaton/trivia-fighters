import { RootState } from 'store/index';
import { createSelector } from '@reduxjs/toolkit';

export const heroSelector = (state: RootState) => state.hero;

export const maxHealthSelector = createSelector(
  heroSelector,
  (heroState): number | undefined => heroState.maxHealth
);

// this passes the hero.state.currentHealth
export const currentHealthSelector = createSelector(
  heroSelector,
  (heroState): number | undefined => heroState.currentHealth
);

export const attackValueSelector = createSelector(
  heroSelector,
  (heroState): number | undefined => heroState.attackValue
);

// selector is for action
// slice will be holding a value and passing it to the component
// would it use a selector (there is not anything to select from)
