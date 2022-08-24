import { RootState } from 'store/index';
import { MOCK_GAME_STATE } from 'store/mocks/game.mocks';
import { MOCK_HERO_STATE } from './hero.mocks';
import { MOCK_OPPONENT_STATE } from './opponent.mocks';

export const MOCK_APP_STATE: RootState = {
  game: MOCK_GAME_STATE,
  hero: MOCK_HERO_STATE,
  opponent: MOCK_OPPONENT_STATE,
};
