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

    decreaseHeroCurrentHealth: (state, action: PayloadAction<number>) => {
      // when blocking and answer is not correct, subtract opponent.attackValue from hero.currentHealth
      state.currentHealth = state.currentHealth - action.payload;
    },

    attackValue: (state, action: PayloadAction<number>) => {
      state.attackValue = action.payload;
    },
  },
});

export const {
  maxHealth,
  currentHealth,
  attackValue,
  decreaseHeroCurrentHealth,
} = heroSlice.actions;

export default heroSlice.reducer;

// reducer is a function that you call to update your data
