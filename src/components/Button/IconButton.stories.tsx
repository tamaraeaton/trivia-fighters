import IconButton, { IconButtonProps } from './IconButton';
import { ComponentStory } from '@storybook/react';
import SwordIcon from '../../assets/images/sword.svg';
import ShieldIcon from '../../assets/images/shield.svg';

export default {
  title: 'IconButton',
  component: IconButton,
};

const Template: ComponentStory<typeof IconButton> = ({ children, ...args }) => (
  <IconButton {...args}>{children}</IconButton>
);

export const SwordButton = Template.bind({});
SwordButton.args = {
  children: 'Heavy Attack',
  icon: <img src={SwordIcon} alt="sword" width="16px" height="16px" />,
  size: 'm',
  count: 3,
};

export const AttackButton = Template.bind({});
AttackButton.args = {
  children: 'Attack',
  icon: <img src={SwordIcon} alt="sword" width="20px" height="20px" />,
  size: 's',
};

export const BlockButton = Template.bind({});
BlockButton.args = {
  children: 'Block',
  icon: <img src={ShieldIcon} alt="sword" width="16px" height="16px" />,
  size: 'm',
  count: 1,
};
