import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface GameState {
  round: number;
  difficulty?: DifficultyType;
  dialogStage?: DialogStageType;
  action: ActionType;
  attackStrength?: AttackPowerType;
  question: QuestionType;
  selectedOption?: string;
  isCorrect?: boolean;
  gameStatus: GameStatusType;
}

export type DifficultyType = 'easy' | 'medium' | 'seth';

export type DialogStageType =
  | 'difficulty'
  | 'action'
  | 'attacking'
  | 'answering'
  | 'answered';

export type ActionType = 'none' | 'attack' | 'block';

export type AttackPowerType = 'light' | 'medium' | 'heavy';

export type QuestionType = {
  status?: 'idle' | 'loading';
  text: string;
  answer: string;
  choices: string[];
};

export type GameStatusType = 'playing' | 'victory' | 'defeat';

export const initialState: GameState = {
  round: 1,
  dialogStage: 'action',
  action: 'none',
  question: { text: '', answer: '', choices: [] },
  gameStatus: 'playing',
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

    attackStrength: (state, action: PayloadAction<AttackPowerType>) => {
      state.dialogStage = 'answering';
      state.attackStrength = action.payload;
    },

    question: (state, action: PayloadAction<QuestionType>) => {
      state.question = action.payload;
    },

    block: (state) => {
      state.dialogStage = 'answering';
      state.action = 'block';
    },

    answered: (state, action: PayloadAction<string>) => {
      const option = action.payload;
      state.dialogStage = 'answered';
      const answer = state.question.answer;
      state.isCorrect = answer === option;
    },

    answeredVerify: (state, action: PayloadAction<string>) => {
      const answer = state.question.answer;
      const isAnswerCorrect = answer === action.payload;

      if (isAnswerCorrect && state.dialogStage === 'answered') {
        state.dialogStage = 'attacking';
      }
      if ((isAnswerCorrect && state.action === 'block') || !isAnswerCorrect) {
        state.dialogStage = 'action';
        state.action = 'none';
      }
      state.isCorrect = undefined;
    },

    difficulty: (state, action: PayloadAction<DifficultyType>) => {
      state.difficulty = action.payload;
      state.dialogStage = 'action';
    },

    gameStatus: (state, action: PayloadAction<GameStatusType>) => {
      state.gameStatus = action.payload;
    },

    resetGameState: (state) => {
      return initialState;
    },
  },
});

export const {
  setRound,
  attack,
  attackStrength,
  block,
  answeredVerify,
  difficulty,
  question,
  answered,
  gameStatus,
  resetGameState,
} = gameSlice.actions;

export default gameSlice.reducer;
