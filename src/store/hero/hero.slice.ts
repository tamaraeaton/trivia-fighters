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
    // total health they can have
    // This should be passed into the hero’s HealthBar component
    setMaxHealth: (state, action: PayloadAction<number>) => {
      state.maxHealth = action.payload;
    },
    // their current health
    // This should be passed into the hero’s HealthBar component
    // anytime the opponent loses or blocks, you are going to call this reducer to update the component object to the new number
    setCurrentHealth: (state, action: PayloadAction<number>) => {
      state.currentHealth = action.payload;
      // actions triggered at click of button
      // string represents something happening on this game
      // redux will show this action was triggered
    },
    // current attack value
    // This should be passed into the hero’s Action component
    setAttackValue: (state, action: PayloadAction<number>) => {
      state.attackValue = action.payload;
    },
  },
});

export const { setMaxHealth, setCurrentHealth, setAttackValue } =
  heroSlice.actions;

export default heroSlice.reducer;

// reducer is a function that you call to update your data
// currentHealth = 100
// currentHealth - opponents attack value
// currentHealth - 90
