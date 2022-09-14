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
};

export const mockQuestionAPIResponse = {
  response_code: 0,
  results: [
    {
      category: 'General Knowledge',
      type: 'multiple',
      difficulty: 'easy',
      question:
        'What is the shape of the toy invented by Hungarian professor Ern\u0151 Rubik?',
      correct_answer: 'Cube',
      incorrect_answers: ['Sphere', 'Cylinder', 'Pyramid'],
    },
  ],
};
