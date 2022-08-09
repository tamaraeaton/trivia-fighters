import AttackDialog from './AttackDialog';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Attack Dialog',
  component: AttackDialog,
};

const Template: ComponentStory<typeof AttackDialog> = () => <AttackDialog />;

export const AttackDialogBox = Template.bind({});
