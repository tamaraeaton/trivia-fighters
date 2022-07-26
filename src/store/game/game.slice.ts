import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface GameState {
  round: number;
}

export const initialState: GameState = {
  round: 1,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setRound: (state, action: PayloadAction<number>) => {
      state.round = action.payload;
    },
  },
});

export const { setRound } = gameSlice.actions;

export default gameSlice.reducer;
