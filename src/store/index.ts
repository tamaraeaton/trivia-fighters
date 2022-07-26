import { configureStore, combineReducers } from '@reduxjs/toolkit';
import gameReducer from 'store/game/game.slice';

export const rootReducer = combineReducers({
  game: gameReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
