import React, { PropsWithChildren } from 'react';
import {
  render,
  renderHook,
  RenderHookOptions,
  RenderOptions,
} from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import type { RootState } from 'store';
import { rootReducer, AppStore } from 'store';

// This type interface extends the default options for render from RTL, as well
// as allows the user to specify other things such as initialState, store.
export interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export interface ExtendedRenderHookOptions<Props>
  extends Omit<RenderHookOptions<Props>, 'wrapper'> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export function renderHookWithProviders<Result, Props>(
  hook: (initialProps: Props) => Result,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderHookOptions<Props> = {}
) {
  const wrapper: React.FunctionComponent<PropsWithChildren> = ({
    children,
  }) => <Provider store={store}>{children}</Provider>;

  return { store, ...renderHook(hook, { wrapper, ...renderOptions }) };
}
