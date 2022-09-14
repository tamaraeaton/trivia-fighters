import { screen } from '@testing-library/react';
import { renderWithProviders } from 'testHelpers';
import AriaRoundMessage from './AriaRoundMessage';

describe('Aria Round Message test', () => {
  it('should render all props', () => {
    renderWithProviders(
      <AriaRoundMessage
        heroCurrentHealth={55}
        heroMaxHealth={100}
        opponentCurrentHealth={75}
        opponentMaxHealth={150}
        currentRound={1}
      />
    );
    expect(screen.getByTestId('aria message')).toHaveTextContent(
      'You are at 55 of 100 health. Your opponent is at 75 of 150, starting Round1'
    );
  });
});
