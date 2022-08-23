import gameReducer, { initialState, setRound } from 'store/game/game.slice';
import { MOCK_GAME_STATE } from 'store/mocks/game.mocks';

describe('Game Slice reducer', () => {
  it('should return the initial state when no previous state', () => {
    expect(gameReducer(undefined, { type: undefined })).toEqual(initialState);
  });

  // it('setRound should set the current round', () => {
  //   expect(gameReducer(MOCK_GAME_STATE, setRound(4))).toEqual({
  //     round: 4,
  //   });
  // });
});
