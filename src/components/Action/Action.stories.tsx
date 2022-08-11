import { ComponentStory } from '@storybook/react';
import Action from './Action';

export default {
  title: 'Action',
  component: Action,
};

const Template: ComponentStory<typeof Action> = (args) => <Action {...args} />;

export const AttackAction = Template.bind({});
AttackAction.args = {
  isReversed: false,
  actionState: 'attack',
  attackValue: 5,
};

export const BlockAction = Template.bind({});
BlockAction.args = {
  isReversed: false,
  actionState: 'block',
};
