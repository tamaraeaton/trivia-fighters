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
    // I am using this to reveal the answer, it changes the color on the buttons and displays incorrect or correct
    // later it will update the points that will be displayed
    answered: (state, action: PayloadAction<string>) => {
      const option = action.payload;
      state.dialogStage = 'answered';
      state.selectedOption = option;
      const answer = state.question.answer;
      state.isCorrect = answer === option;
      console.log('answer', answer);
      console.log('option', option);
    },
    // reset selected option
    // state.selectedOption = undefined
    // where do this live (closing answerVerify or for opening the next action)
    // this does the calculation, subtracts from health bar and resets game for the next question
    // clicking the Next button
    answeredVerify: (state, action) => {
      const answer = state.question.answer;

      const isAnswerCorrect = answer === state.selectedOption;
      console.log('selectedOption', state.selectedOption);

      // need to use this isCorrect on the Game.tsx to determine if
      // the message says 'Correct' or 'Incorrect'

      if (isAnswerCorrect && state.dialogStage === 'attacking') {
        state.dialogStage = 'answering';
        // state.isCorrect = true;
        // how do I use this in Game.tsx?
      }
      if (isAnswerCorrect && state.action === 'block') {
        state.dialogStage = 'action';
        state.action = 'none';
        // state.isCorrect = true;
      }
      if (
        (!isAnswerCorrect && state.dialogStage === 'attacking') ||
        state.action === 'block'
      ) {
        state.action = 'none';
        // state.isCorrect = false;
      }
      state.isCorrect = undefined;
      // a guess after trying tons of other stuff
      // state.action.includes('true');
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
