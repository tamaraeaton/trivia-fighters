import { screen } from '@testing-library/react';
import { renderWithProviders } from 'testHelpers';
import Game from './Game';

describe('Game Page', () => {
  it('player health bar should render', () => {
    renderWithProviders(<Game />);
    expect(screen.getByTestId('playerHealthBar')).toBeDefined();
  });

  it('opponent health bar should render', () => {
    renderWithProviders(<Game />);
    expect(screen.getByTestId('opponentHealthBar')).toBeDefined();
  });

  it('round should render', () => {
    renderWithProviders(<Game />);
    expect(screen.getByTestId('round')).toBeDefined();
  });

  it('avatar should render', () => {
    renderWithProviders(<Game />);
    expect(screen.getByTestId('myAvatar')).toBeInTheDocument();
  });
});
