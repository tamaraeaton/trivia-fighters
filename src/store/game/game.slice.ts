import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface GameState {
  round: number;
  difficulty?: DifficultyType;
  dialogStage: DialogStageType;
  action: ActionType;
  attackStrength?: AttackPowerType;
  question: QuestionType;
  selectedOption?: string;
  isCorrect?: boolean;
}

export type DifficultyType = 'easy' | 'medium' | 'seth' | undefined;

export type DialogStageType =
  | 'difficulty'
  | 'action'
  | 'attacking'
  | 'answering'
  | 'answered';

export type ActionType = 'none' | 'attack' | 'block';

export type AttackPowerType = 'light' | 'medium' | 'heavy' | undefined;

export type QuestionType = {
  status?: 'idle' | 'loading';
  text: string;
  answer: string;
  choices: string[];
};

export const initialState: GameState = {
  round: 1,
  dialogStage: 'difficulty',
  action: 'none',
  question: { text: '', answer: '', choices: [] },
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

    // When the redux answered action is triggered from the Attack
    // If current state of action is attack
    // If the answer is correct
    // Add 5, 10, or 15 based on attackPower to hero.attackValue
    // If the answer is not correc
    // Subtract hero.attackValue from opponent.currentHealth
    // Set hero.attackValue to 0
    answered: (state, action: PayloadAction<string>) => {
      const option = action.payload;
      state.dialogStage = 'answered';
      state.selectedOption = option;

      const answer = state.question.answer;
      state.isCorrect = answer === option;
    },

    answeredVerify: (state, action) => {
      const answer = state.question.answer;
      const isAnswerCorrect = answer === state.selectedOption;

      if (isAnswerCorrect && state.dialogStage === 'attacking') {
        state.dialogStage = 'answering';
      }
      if (isAnswerCorrect && state.action === 'block') {
        state.dialogStage = 'action';
        state.action = 'none';
      }
      if (
        (!isAnswerCorrect && state.dialogStage === 'attacking') ||
        state.action === 'block'
      ) {
        state.action = 'none';
      }
      state.isCorrect = undefined;
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
  answeredVerify,
  difficulty,
  question,
  answered,
} = gameSlice.actions;

export default gameSlice.reducer;
