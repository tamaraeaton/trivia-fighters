import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'testHelpers';
import AttackDialog from './AttackDialog';

describe('Attack Dialog Tests', () => {
  it('should render an action dialog', () => {
    renderWithProviders(<AttackDialog />);
    expect(screen.getByTestId('attackDialog')).toBeDefined();
    expect(screen.getByTestId('lightAttack')).toHaveTextContent(
      'Light Attack +1'
    );
  });
  it('should update attackStrength to light when attack button is clicked', () => {
    const { store } = renderWithProviders(<AttackDialog />);
    expect(store.getState().game.attackStrength).not.toBeDefined();
    fireEvent.click(screen.getByTestId('lightAttack'));
    expect(store.getState().game.attackStrength).toBe('light');
  });
  it('should update attackStrength to medium when attack button is clicked', () => {
    const { store } = renderWithProviders(<AttackDialog />);
    expect(store.getState().game.attackStrength).not.toBeDefined();
    fireEvent.click(screen.getByTestId('mediumAttack'));
    expect(store.getState().game.attackStrength).toBe('medium');
  });
  it('should update attackStrength heavy when attack button is clicked', () => {
    const { store } = renderWithProviders(<AttackDialog />);
    expect(store.getState().game.attackStrength).not.toBeDefined();
    fireEvent.click(screen.getByTestId('heavyAttack'));
    expect(store.getState().game.attackStrength).toBe('heavy');
  });
});
