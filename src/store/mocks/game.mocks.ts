import { GameState } from 'store/game/game.slice';

export const MOCK_GAME_STATE: GameState = {
  round: 2,
  dialogStage: 'difficulty',
  action: 'none',
  isAnswered: false,
  isCorrect: true,
  difficulty: 'easy',
};

// USED FOR TESTING
