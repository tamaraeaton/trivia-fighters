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

export const ShieldButton: Story<IconButtonProps> = (props) => (
  <IconButton
    icon={<img src={ShieldIcon} alt="shield" width="16px" height="16px" />}
  >
    Shield Button
  </IconButton>
);
