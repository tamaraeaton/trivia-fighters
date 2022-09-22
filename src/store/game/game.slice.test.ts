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

  it('should set round correctly', () => {
    expect(MOCK_GAME_STATE.round).toEqual(2);
    expect(gameReducer(MOCK_GAME_STATE, setRound(3)).round).toEqual(3);
  });

  it('should set action to attack and dialogState to attacking when attack is called', () => {
    expect(MOCK_GAME_STATE.action).toEqual('none');
    expect(MOCK_GAME_STATE.dialogStage).toEqual('answered');
    const newMockGameState = gameReducer(MOCK_GAME_STATE, attack());
    expect(newMockGameState.action).toEqual('attack');
    expect(newMockGameState.dialogStage).toEqual('attacking');
  });

  it('should set action to block and dialogStage to anwering when block is called', () => {
    expect(MOCK_GAME_STATE.action).toEqual('none');
    expect(MOCK_GAME_STATE.dialogStage).toEqual('answered');
    const newMockGameState = gameReducer(MOCK_GAME_STATE, block());
    expect(newMockGameState.action).toEqual('block');
    expect(newMockGameState.dialogStage).toEqual('answering');
  });
});
