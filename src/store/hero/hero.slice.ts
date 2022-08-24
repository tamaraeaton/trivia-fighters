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
    setMaxHealth: (state, action: PayloadAction<number>) => {
      state.maxHealth = action.payload;
    },
    setCurrentHealth: (state, action: PayloadAction<number>) => {
      state.currentHealth = action.payload;
    },
    setAttackValue: (state, action: PayloadAction<number>) => {
      state.attackValue = action.payload;
    },
  },
});

export const { setMaxHealth, setCurrentHealth, setAttackValue } =
  heroSlice.actions;

export default heroSlice.reducer;
