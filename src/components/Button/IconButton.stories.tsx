import IconButton from './IconButton';
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

export const AttackLevelLight = Template.bind({});
AttackLevelLight.args = {
  children: 'Light Attack',
  icon: <img src={SwordIcon} alt="sword" width="16px" height="16px" />,
  size: 'l',
  count: 1,
};

export const AttackLevelMedium = Template.bind({});
AttackLevelMedium.args = {
  children: 'Medium Attack',
  icon: <img src={SwordIcon} alt="sword" width="16px" height="16px" />,
  size: 'l',
  count: 2,
};

export const AttackLevelHeavy = Template.bind({});
AttackLevelHeavy.args = {
  children: 'Heavy Attack',
  icon: <img src={SwordIcon} alt="sword" width="16px" height="16px" />,
  size: 'l',
  count: 3,
};

export const AttackButton = Template.bind({});
AttackButton.args = {
  children: 'Attack',
  icon: <img src={SwordIcon} alt="sword" width="31px" height="30px" />,
  size: 'xl',
};

export const BlockButton = Template.bind({});
BlockButton.args = {
  children: 'Block',
  icon: <img src={ShieldIcon} alt="sword" width="22px" height="28px" />,
  size: 'xl',
  count: 1,
};
