import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HeroState {
  maxHealth: number;
  currentHealth: number;
  attackValue: number;
}

export const initialState: HeroState = {
  maxHealth: 100,
  currentHealth: 100,
  attackValue: 0,
};

export const heroSlice = createSlice({
  name: 'hero',
  initialState,
  reducers: {
    maxHealth: (state, action: PayloadAction<number>) => {
      state.maxHealth = action.payload;
    },

    currentHealth: (state, action: PayloadAction<number>) => {
      state.currentHealth = action.payload;
    },

    increaseHeroCurrentHealth: (state) => {
      state.currentHealth = Math.min(state.currentHealth + 10, 100);
    },

    decreaseHeroCurrentHealth: (state, action: PayloadAction<number>) => {
      // clamp at 0 to avoid negative
      state.currentHealth = Math.max(state.currentHealth - action.payload, 0);
    },

    attackValue: (state, action: PayloadAction<number>) => {
      state.attackValue =
        action.payload === 0 ? 0 : state.attackValue + action.payload;
    },

    resetHeroState: (state) => {
      return initialState;
    },
  },
});

export const {
  maxHealth,
  currentHealth,
  attackValue,
  resetHeroState,
  decreaseHeroCurrentHealth,
  increaseHeroCurrentHealth,
} = heroSlice.actions;

export default heroSlice.reducer;

// reducer is a function that you call to update your data
