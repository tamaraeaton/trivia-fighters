import { render, screen } from '@testing-library/react';
import Action from './Action';

describe('Action Component', () => {
  it('should render sword icon', () => {
    render(<Action isReversed={false} actionState="attack" attackValue={3} />);
    expect(screen.getByTestId('attackBlock')).toHaveAttribute(
      'src',
      'sword.svg'
    );
  });

  it('should render shield icon', () => {
    render(<Action isReversed={false} actionState="block" />);
    expect(screen.getByTestId('attackBlock')).toHaveAttribute(
      'src',
      'shield.svg'
    );
  });

  it('sword should render reversed if reversed is true', () => {
    render(
      <Action isReversed={true} actionState="attack" attackValue={5}></Action>
    );
    expect(screen.getByTestId('attackBlock')).toHaveClass('iconReversed');
  });

  it('should should not render reversed if reversed is false', () => {
    render(
      <Action isReversed={false} actionState="attack" attackValue={5}></Action>
    );
    expect(screen.getByTestId('attackBlock')).not.toHaveClass('iconReversed');
  });

  it('should render 5 if attack value is 5', () => {
    render(
      <Action isReversed={false} actionState="attack" attackValue={5}></Action>
    );
    expect(screen.getByTestId('attackvalue')).toHaveTextContent('5');
  });
});
