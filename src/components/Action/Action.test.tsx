import { render, screen } from '@testing-library/react';
import Action from './Action';
import SwordIcon from '../../assets/images/sword.svg';
import ShieldIcon from '../../assets/images/shield.svg';

describe('Action Component', () => {
  it('should render sword icon', () => {
    render(
      <Action isReversed={false} actionState="attack" attackValue={5}></Action>
    );
    // expect(screen.getByTestId('attackBlock')).toHave(SwordIcon);
  });
});
