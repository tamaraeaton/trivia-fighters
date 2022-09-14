import { render, screen } from '@testing-library/react';
import HealthBar from './HealthBar';

describe('HealthBar Component', () => {
  it('should render green bar if > 50', () => {
    render(
      <HealthBar
        isReversed={false}
        maxHealth={100}
        currentHealth={90}
        testID="player"
      />
    );
    expect(screen.getByTestId('player-healthBarFill')).toHaveStyle(
      'background: linear-gradient(60deg, #007c4d 0%, #00f658 100%)'
    );
    expect(screen.getByTestId('player-healthFullIcon')).toBeDefined();
    expect(screen.getByTestId('player-healthBarLabel')).toHaveTextContent(
      '90/100'
    );
  });

  it('should render red bar if < 50', () => {
    render(
      <HealthBar
        isReversed={false}
        maxHealth={150}
        currentHealth={70}
        testID="player"
      />
    );
    expect(screen.getByTestId('player-healthBarFill')).toHaveStyle(
      'background: linear-gradient(60deg, #ff0000 0%, #960000 100%)'
    );
    expect(screen.getByTestId('player-healthLowIcon')).toBeDefined();
    expect(screen.getByTestId('player-healthBarLabel')).toHaveTextContent(
      '70/150'
    );
  });
});
