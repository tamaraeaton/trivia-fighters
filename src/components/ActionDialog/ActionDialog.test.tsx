import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'testHelpers';
import ActionDialog from './ActionDialog';

describe('Action Dialog Tests', () => {
  it('should render an action dialog', () => {
    renderWithProviders(<ActionDialog></ActionDialog>);
    expect(screen.getByTestId('actionDialog')).toBeDefined();
    expect(screen.getByTestId('attack')).toBeDefined();
    expect(screen.getByTestId('block')).toBeDefined();
  });
  it('should update state when Attack button is clicked', () => {
    const { store } = renderWithProviders(<ActionDialog></ActionDialog>);
    expect(store.getState().game.dialogStage).toBe('difficulty');
    fireEvent.click(screen.getByTestId('attack'));
    expect(store.getState().game.dialogStage).toBe('attacking');
  });
  it('should update state when Block button is clicked', () => {
    const { store } = renderWithProviders(<ActionDialog></ActionDialog>);
    expect(store.getState().game.dialogStage).toBe('difficulty');
    fireEvent.click(screen.getByTestId('block'));
    expect(store.getState().game.dialogStage).toBe('answering');
  });
});
