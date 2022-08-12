import { render, screen } from '@testing-library/react';
import Game from './Game';

describe('Game Page', () => {
  it('player health bar should show', () => {
    render(<Game />);
    expect(screen.getByTestId('playerHealthBar')).toBeDefined();
  });

  it('opponent health bar should show', () => {
    render(<Game />);
    expect(screen.getByTestId('opponentHealthBar')).toBeDefined();
  });

  it('round should show', () => {
    render(<Game />);
    expect(screen.getByTestId('round')).toBeDefined();
  });
});
