import { GameState } from 'store/game/game.slice';

export const MOCK_GAME_STATE: GameState = {
  round: 2,
  dialogStage: 'difficulty',
  action: 'none',
  difficulty: 'easy',
  attackStrength: undefined,
  question: { text: '', answer: '', choices: [] },
};

// USED FOR TESTING
