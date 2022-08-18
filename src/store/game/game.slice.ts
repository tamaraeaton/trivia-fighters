import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface GameState {
  round: number;
  dialogStage: DialogStageType;
  action: ActionType;
  isAnswered: boolean;
  difficulty: DifficultyType;
  attackStrength: AttackStrengthType;
  question: QuestionType;
}

export type DifficultyType = 'easy' | 'medium' | 'seth' | undefined;
export type DialogStageType =
  | 'difficulty'
  | 'action'
  | 'attacking'
  | 'answering'
  | 'answered';
export type ActionType = 'none' | 'attack' | 'block';
export type AttackStrengthType = 'light' | 'medium' | 'heavy' | undefined;
export type QuestionType = {
  status: 'idle' | 'loading';
  text: string;
  answer: string;
  choices: string[];
};
export type AttackPowerType = 'light' | 'medium' | 'heavy' | undefined;

export const initialState: GameState = {
  round: 1,
  dialogStage: 'difficulty',
  action: 'none',
  isAnswered: true,
  difficulty: undefined,
  attackStrength: undefined,
  question: { status: 'idle', text: '', answer: '', choices: [] },
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setRound: (state, action: PayloadAction<number>) => {
      state.round = action.payload;
    },
    attack: (state) => {
      state.dialogStage = 'attacking';
      state.action = 'attack';
    },
    attackStrength: (state, action: PayloadAction<AttackStrengthType>) => {
      state.dialogStage = 'answering';
      // when redux attackStrength is triggered make an API request to API for the question with the appropriate difficulty
      // update the question in redux (choices s/b randomized and all previous state changes remain the same)
      state.attackStrength = action.payload;
    },
    attackPower: (state, action: PayloadAction<AttackPowerType>) => {
      // update attackPower with appropriate difficulty when attackStringth action is triggered
    },
    block: (state) => {
      state.dialogStage = 'answering';
      state.action = 'block';
    },
    answered: (state) => {
      // when this action is triggered it will check to see if it matches the correct answer
      // if correct (dialogStage to attacking)
      // if incorrect (dialogStage to action and action to none)
      state.dialogStage = 'answered';
    },
    answeredVerify: (state, action: PayloadAction<Boolean>) => {
      if (state.dialogStage === 'attacking' && state.isAnswered) {
        state.dialogStage = 'answering';
      }
      if (state.action === 'block' && state.isAnswered) {
        state.dialogStage = 'action';
        state.action = 'none';
      }
      if (
        (!state.isAnswered && state.dialogStage === 'attacking') ||
        state.action === 'block'
      ) {
        state.action = 'none';
      }
    },
    difficulty: (state, action: PayloadAction<DifficultyType>) => {
      state.difficulty = action.payload;
      state.dialogStage = 'action';
    },
  },
});

export const {
  setRound,
  attack,
  attackStrength,
  block,
  answered,
  answeredVerify,
  difficulty,
} = gameSlice.actions;

export default gameSlice.reducer;
