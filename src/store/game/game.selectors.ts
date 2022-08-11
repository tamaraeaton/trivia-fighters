import { RootState } from 'store/index';
import { createSelector } from '@reduxjs/toolkit';
import { DialogStage, Difficulty, Action } from '../game/game.slice';

export const gameSelector = (state: RootState) => state.game;

// createSelector is maybe overkill here, but providing as an example
export const gameRoundSelector = createSelector(
  gameSelector,
  (gameState): number => gameState.round
);

export const dialogStageSelector = createSelector(
  gameSelector,
  (gameState): DialogStage => gameState.dialogStage
);

export const actionSelector = createSelector(
  gameSelector,
  (gameState): Action => gameState.action
);
export const difficultySelector = createSelector(
  gameSelector,
  (gameState): Difficulty => gameState.difficulty
);

export const wasCorrectSelector = createSelector(
  gameSelector,
  (gameState): boolean => gameState.isCorrect
);
