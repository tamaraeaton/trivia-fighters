import { RootState } from 'store/index';
import { createSelector } from '@reduxjs/toolkit';
import {
  DialogStageType,
  DifficultyType,
  ActionType,
  AttackPowerType,
  QuestionType,
  GameStatusType,
} from '../game/game.slice';

export const gameSelector = (state: RootState) => state.game;

export const gameRoundSelector = createSelector(
  gameSelector,
  (gameState): number => gameState.round
);

export const dialogStageSelector = createSelector(
  gameSelector,
  (gameState): DialogStageType | undefined => gameState.dialogStage
);

export const actionSelector = createSelector(
  gameSelector,
  (gameState): ActionType => gameState.action
);

export const difficultySelector = createSelector(
  gameSelector,
  (gameState): DifficultyType | undefined => gameState.difficulty
);

export const attackStrengthSelector = createSelector(
  gameSelector,
  (gameState): AttackPowerType | undefined => gameState.attackStrength
);

export const questionSelector = createSelector(
  gameSelector,
  (gameState): QuestionType => gameState.question
);

export const isCorrectSelector = createSelector(
  gameSelector,
  (gameState): boolean | undefined => gameState.isCorrect
);

export const gameStatusSelector = createSelector(
  gameSelector,
  (gameState): GameStatusType => gameState.gameStatus
);

// selectors are variables to get specific pieces of state within redux store
