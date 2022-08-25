import { GameState } from 'store/game/game.slice';

export const MOCK_GAME_STATE: GameState = {
  round: 2,
  dialogStage: 'difficulty',
  action: 'none',
  isAnswered: true,
  difficulty: 'easy',
  attackStrength: undefined,
};

// USED FOR TESTING
