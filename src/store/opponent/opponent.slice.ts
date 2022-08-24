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
      state.currentHealth = action.payload;
    },
    setAttackValue: (state, action: PayloadAction<number>) => {
      state.attackValue = action.payload;
    },
    setDifficulty: (state, action: PayloadAction<DifficultyType>) => {
      state.difficulty = action.payload;
    },
  },
});

export const { setMaxHealth, setCurrentHealth, setAttackValue } =
  opponentSlice.actions;

export default opponentSlice.reducer;
