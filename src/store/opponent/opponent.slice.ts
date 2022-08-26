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
    // total health they can have
    // This should be passed into the hero’s HealthBar component
    setMaxHealth: (state, action: PayloadAction<number>) => {
      state.maxHealth = action.payload;
    },
    // their current health
    // This should be passed into the hero’s HealthBar component
    setCurrentHealth: (state, action: PayloadAction<number>) => {
      state.currentHealth = action.payload;
    },
    // current attack value
    // This should be passed into the hero’s Action component
    setAttackValue: (state, action: PayloadAction<number>) => {
      state.attackValue = action.payload;
    },
    // options are easy, medium, seth
    setDifficulty: (state, action: PayloadAction<DifficultyType>) => {
      state.difficulty = action.payload;
    },
  },
});

export const { setMaxHealth, setCurrentHealth, setAttackValue } =
  opponentSlice.actions;

export default opponentSlice.reducer;
