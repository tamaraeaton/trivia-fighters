import { render, screen } from '@testing-library/react';
import Action from './Action';

describe('Action Component', () => {
  it('player should render sword icon if attack', () => {
    render(
      <Action
        isReversed={false}
        actionState="attack"
        attackValue={3}
        testID="player"
      />
    );
    expect(screen.getByTestId('player-icon')).toHaveAttribute(
      'src',
      'sword.svg'
    );
  });

  it('player should render shield icon if block', () => {
    render(<Action isReversed={false} actionState="block" testID="player" />);
    expect(screen.getByTestId('player-icon')).toHaveAttribute(
      'src',
      'shield.svg'
    );
  });

  it('opponent sword should render reversed sword if attack', () => {
    render(
      <Action
        isReversed={true}
        actionState="attack"
        attackValue={5}
        testID="opponent"
      ></Action>
    );
    expect(screen.getByTestId('opponent-icon')).toHaveClass('iconReversed');
  });

  it('player should render attack value 5', () => {
    render(
      <Action
        isReversed={false}
        actionState="attack"
        attackValue={5}
        testID="player"
      ></Action>
    );
    expect(screen.getByTestId('player-attackvalue')).toHaveTextContent('5');
  });
});
