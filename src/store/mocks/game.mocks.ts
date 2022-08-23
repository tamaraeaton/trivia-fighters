import { GameState } from 'store/game/game.slice';

export const MOCK_GAME_STATE: GameState = {
  round: 2,
  dialogStage: 'answered',
  action: 'none',
  difficulty: 'easy',
  attackStrength: undefined,
  question: {
    text: 'How many moons are there?',
    answer: 'Depends on the planet',
    choices: ['One', 'Four', 'None', 'Depends on the planet'],
  },
  isCorrect: false,
};

// USED FOR TESTING REDUCERS
// test cases
// test after 4th question
