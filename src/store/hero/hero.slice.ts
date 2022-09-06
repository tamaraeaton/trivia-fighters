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
      // clamp at 0 to avoid negative
      state.currentHealth = Math.max(state.currentHealth - action.payload, 0);
    },

    // when I block, if the answer is correct, I get 10 added to my current health
    increaseHeroCurrentHealth: (state, action: PayloadAction) => {
      state.currentHealth = Math.min(state.currentHealth + 10, 100);
    },

    // TODO: the min should be set for the highest attack value to equal the opponents maxHealth (easy, medium, seth)
    // hard coded 100 for easy temporarily
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
  decreaseHeroCurrentHealth,
  increaseHeroCurrentHealth,
  resetHeroState,
} = heroSlice.actions;

export default heroSlice.reducer;

// reducer is a function that you call to update your data
