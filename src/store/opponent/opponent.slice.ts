import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DifficultyType } from 'store/game/game.slice';

export interface OpponentState {
  maxHealth: number;
  currentHealth: number;
  attackValue: number;
  difficulty: DifficultyType;
}

export const initialState: OpponentState = {
  maxHealth: 100,
  currentHealth: 100,
  // hardcoded to 5 for now on Attacking story
  attackValue: 0,
  difficulty: 'easy',
};

export const opponentSlice = createSlice({
  name: 'opponent',
  initialState,
  reducers: {
    setMaxHealth: (state, action: PayloadAction<number>) => {
      state.maxHealth = action.payload;
    },

    setCurrentHealth: (state, action: PayloadAction<number>) => {
      // Math.min to clamp
      state.currentHealth = action.payload;
    },
    decreaseOpponentHealth: (state, action: PayloadAction<number>) => {
      // clamp at 0 to avoid negative
      state.currentHealth = Math.max(state.currentHealth - action.payload, 0);
    },

    attackValue: (state, action: PayloadAction<number>) => {
      state.attackValue = action.payload;
    },

    setDifficulty: (state, action: PayloadAction<DifficultyType>) => {
      state.difficulty = action.payload;
    },
  },
});

export const {
  setMaxHealth,
  setCurrentHealth,
  attackValue,
  decreaseOpponentHealth,
} = opponentSlice.actions;

export default opponentSlice.reducer;
