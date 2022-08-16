import { RootState } from 'store/index';
import { createSelector } from '@reduxjs/toolkit';
import {
  DialogStageType,
  DifficultyType,
  ActionType,
  AttackStrengthType,
} from '../game/game.slice';

export const gameSelector = (state: RootState) => state.game;

// keeping example for round selecter
export const gameRoundSelector = createSelector(
  gameSelector,
  (gameState): number => gameState.round
);

export const dialogStageSelector = createSelector(
  gameSelector,
  (gameState): DialogStageType => gameState.dialogStage
);

export const actionSelector = createSelector(
  gameSelector,
  (gameState): ActionType => gameState.action
);

export const difficultySelector = createSelector(
  gameSelector,
  (gameState): DifficultyType => gameState.difficulty
);

export const isCorrectSelector = createSelector(
  gameSelector,
  (gameState): boolean => gameState.isAnswered
);

export const attackStrengthSelector = createSelector(
  gameSelector,
  (gameState): AttackStrengthType => gameState.attackStrength
);
