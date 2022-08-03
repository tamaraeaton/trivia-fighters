import IconButton, { IconButtonProps } from './IconButton';
import { Story } from '@storybook/react';
import SwordIcon from '../../assets/images/sword.svg';
import ShieldIcon from '../../assets/images/shield.svg';

export default {
  title: 'IconButton',
  component: IconButton,
};

export const SwordButton: Story<IconButtonProps> = (props) => (
  <IconButton
    icon={<img src={SwordIcon} alt="sword" width="16px" height="16px" />}
    size="m"
    count={props.count}
  >
    Sword Button
  </IconButton>
);
SwordButton.args = { count: 1 };

export const BlockButton: Story<IconButtonProps> = (props) => (
  <IconButton
    icon={<img src={ShieldIcon} alt="shield" width="20px" height="20px" />}
    size="s"
  >
    Block
  </IconButton>
);

export const AttackButton: Story<IconButtonProps> = (props) => (
  <IconButton
    icon={<img src={SwordIcon} alt="sword" width="20px" height="20px" />}
    size="s"
  >
    Attack
  </IconButton>
);
