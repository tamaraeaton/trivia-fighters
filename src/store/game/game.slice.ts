import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface GameState {
  round: number;
  dialogStage: DialogStage;
  action: Action;
  isAnswered: boolean;
  isCorrect: boolean;
  difficulty: Difficulty;
}

// these are being used in selectors as well, so we defined this as a type
// it is here to reuse in multiple places like here and in the multiple selector
export type Difficulty = 'easy' | 'medium' | 'hard';
export type DialogStage =
  | 'difficulty'
  | 'action'
  | 'attacking'
  | 'answering'
  | 'answered';
export type Action = 'none' | 'attack' | 'block';

export const initialState: GameState = {
  round: 1,
  dialogStage: 'difficulty',
  action: 'none',
  isAnswered: false,
  isCorrect: true,
  difficulty: 'easy',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setRound: (state, action: PayloadAction<number>) => {
      state.round = action.payload;
    },
    // these actions update dialog stage, I created a dialog stage in game.selector and imported it into Game to use
    attack: (state) => {
      state.dialogStage = 'attacking';
      state.action = 'attack';
    },
    attackStrength: (state, action: PayloadAction<Difficulty>) => {
      state.dialogStage = 'answering';
    },
    block: (state) => {
      state.dialogStage == 'answering';
      state.action = 'block';
    },
    answered: (state, action: PayloadAction<String>) => {
      state.dialogStage = 'answered';
    },
    answeredVerify: (state, action: PayloadAction<Boolean>) => {
      if (state.dialogStage === 'attacking' && state.isCorrect) {
        state.dialogStage = 'answering';
      }
      if (state.action === 'block' && state.isCorrect) {
        state.dialogStage = 'action';
        state.action = 'none';
      }
      if (
        (!state.isCorrect && state.dialogStage === 'attacking') ||
        state.action === 'block'
      ) {
        state.action = 'none';
      }
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
} = gameSlice.actions;

export default gameSlice.reducer;
