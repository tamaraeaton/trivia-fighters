import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface GameState {
  round: number;
  dialogStage: DialogStageType;
  action: ActionType;
  isAnswered: boolean;
  difficulty: DifficultyType;
  attackStrength: AttackStrengthType;
}

export type DifficultyType = 'easy' | 'medium' | 'seth' | undefined;
export type DialogStageType =
  | 'difficulty'
  | 'action'
  | 'attacking'
  | 'answering'
  | 'answered';
export type ActionType = 'none' | 'attack' | 'block';
export type AttackStrengthType = 'light' | 'medium' | 'heavy' | undefined;

export const initialState: GameState = {
  round: 1,
  dialogStage: 'difficulty',
  action: 'none',
  isAnswered: true,
  difficulty: undefined,
  attackStrength: undefined,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setRound: (state, action: PayloadAction<number>) => {
      state.round = action.payload;
    },
    attack: (state) => {
      state.dialogStage = 'attacking';
      state.action = 'attack';
    },
    attackStrength: (state, action: PayloadAction<AttackStrengthType>) => {
      state.dialogStage = 'answering';
      state.attackStrength = action.payload;
    },
    block: (state) => {
      state.dialogStage = 'answering';
      state.action = 'block';
    },
    answered: (state) => {
      state.dialogStage = 'answered';
    },
    answeredVerify: (state, action: PayloadAction<Boolean>) => {
      if (state.dialogStage === 'attacking' && state.isAnswered) {
        state.dialogStage = 'answering';
      }
      if (state.action === 'block' && state.isAnswered) {
        state.dialogStage = 'action';
        state.action = 'none';
      }
      if (
        (!state.isAnswered && state.dialogStage === 'attacking') ||
        state.action === 'block'
      ) {
        state.action = 'none';
      }
    },
    difficulty: (state, action: PayloadAction<DifficultyType>) => {
      state.difficulty = action.payload;
      state.dialogStage = 'action';
    },
  },
});

export const {
  setRound,
  attack,
  attackStrength,
  block,
  answered,
  answeredVerify,
  difficulty,
} = gameSlice.actions;

export default gameSlice.reducer;
