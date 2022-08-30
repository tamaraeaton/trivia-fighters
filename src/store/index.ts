import { configureStore, combineReducers, Middleware } from '@reduxjs/toolkit';
import gameReducer from 'store/game/game.slice';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { watchAttackStrength } from './game/game.sagas';

export const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
  game: gameReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

const runSagas = (middleware: SagaMiddleware<Middleware>) => {
  middleware.run(watchAttackStrength);
  // Add another saga like this - middleware.run(nextSaga)
};
runSagas(sagaMiddleware);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
