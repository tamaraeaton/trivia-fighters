import { screen } from '@testing-library/react';
import { renderWithProviders } from 'testHelpers';
import AriaRoundMessage from './AriaRoundMessage';

describe('Aria Round Message test', () => {
  it('should render all props', () => {
    renderWithProviders(
      <AriaRoundMessage
        heroCurrentHealth={100}
        heroMaxHealth={99}
        opponentCurrentHealth={100}
        opponentMaxHealth={1}
        currentRound={1}
      />
    );
    expect(screen.getByTestId('aria message')).toHaveTextContent('100');
    expect(screen.getByTestId('aria message')).toHaveTextContent('99');
  });
});
