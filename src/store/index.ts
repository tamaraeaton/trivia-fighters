import { configureStore, combineReducers, Middleware } from '@reduxjs/toolkit';
import gameReducer from 'store/game/game.slice';
import heroReducer from 'store/players/hero/hero.slice';
import opponentReducer from 'store/players/opponent/opponent.slice';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { watchAttackStrength, watchBlockAction } from './game/game.sagas';
import { all } from 'redux-saga/effects';

export const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  game: gameReducer,
  hero: heroReducer,
  opponent: opponentReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

const runSagas = (middleware: SagaMiddleware<Middleware>) => {
  function* rootSaga() {
    yield all([watchAttackStrength(), watchBlockAction()]);
  }
  middleware.run(rootSaga);
};
runSagas(sagaMiddleware);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
