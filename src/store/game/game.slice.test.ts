import gameReducer, {
  initialState,
  attack,
  block,
  setRound,
} from 'store/game/game.slice';
import { MOCK_GAME_STATE } from 'store/mocks/game.mocks';

describe('Game Slice reducer', () => {
  it('should return the initial state when no previous state', () => {
    expect(gameReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  it('should return the round 3 when previous state is answeredVerify', () => {
    expect(gameReducer(MOCK_GAME_STATE, setRound(3))).toEqual({
      round: 3,
      dialogStage: 'answered',
      action: 'none',
      difficulty: 'easy',
      attackStrength: undefined,
      question: {
        text: 'How many moons are there?',
        answer: 'Depends on the planet',
        choices: ['One', 'Four', 'None', 'Depends on the planet'],
      },
    });
  });

  it('should return the return the dialogStage attacking when previous state is action', () => {
    expect(gameReducer(MOCK_GAME_STATE, attack())).toEqual({
      round: 2,
      dialogStage: 'attacking',
      action: 'attack',
      difficulty: 'easy',
      attackStrength: undefined,
      question: {
        text: 'How many moons are there?',
        answer: 'Depends on the planet',
        choices: ['One', 'Four', 'None', 'Depends on the planet'],
      },
    });
  });

  it('should return the return the dialogStage answering when previous state is action', () => {
    expect(gameReducer(MOCK_GAME_STATE, block())).toEqual({
      round: 2,
      dialogStage: 'answering',
      action: 'block',
      difficulty: 'easy',
      attackStrength: undefined,
      question: {
        text: 'How many moons are there?',
        answer: 'Depends on the planet',
        choices: ['One', 'Four', 'None', 'Depends on the planet'],
      },
    });
  });
});
