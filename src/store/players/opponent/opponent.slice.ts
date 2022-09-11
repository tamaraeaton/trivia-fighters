import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface OpponentState {
  maxHealth: number;
  currentHealth: number;
  attackValue: number;
}

export const initialState: OpponentState = {
  maxHealth: 100,
  currentHealth: 100,
  attackValue: 0,
};

export const opponentSlice = createSlice({
  name: 'opponent',
  initialState,
  reducers: {
    maxHealth: (state, action: PayloadAction<number>) => {
      state.maxHealth = action.payload;
    },

    currentHealth: (state, action: PayloadAction<number>) => {
      state.currentHealth = action.payload;
    },

    decreaseOpponentHealth: (state, action: PayloadAction<number>) => {
      // clamp at 0 to avoid negative

      state.currentHealth = Math.max(state.currentHealth - action.payload, 0);
      // opponentCurrentHealth - heroAttackValue, 0
    },

    attackValue: (state, action: PayloadAction<number>) => {
      state.attackValue = action.payload;
    },

    resetOpponentState: (state) => {
      return initialState;
    },
  },
});

export const {
  maxHealth,
  currentHealth,
  attackValue,
  decreaseOpponentHealth,
  resetOpponentState,
} = opponentSlice.actions;

export default opponentSlice.reducer;
