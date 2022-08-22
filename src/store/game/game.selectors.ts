import { RootState } from 'store/index';
import { createSelector } from '@reduxjs/toolkit';
import {
  DialogStageType,
  DifficultyType,
  ActionType,
  AttackPowerType,
  QuestionType,
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

export const attackStrengthSelector = createSelector(
  gameSelector,
  (gameState): AttackPowerType => gameState.attackStrength
);

export const questionSelector = createSelector(
  gameSelector,
  (gameState): QuestionType => gameState.question
);

export const isCorrectSelector = createSelector(
  gameSelector,
  (gameState): boolean | undefined => gameState.isCorrect
);

// selectors are for getting state
