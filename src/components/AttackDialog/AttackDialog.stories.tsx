import AttackDialog from './AttackDialog';
import { ComponentStory } from '@storybook/react';
import Dialog from '../Dialog/Dialog';

export default {
  title: 'Attack Dialog',
  component: AttackDialog,
};

const Template: ComponentStory<typeof AttackDialog> = () => (
  <Dialog>
    <AttackDialog />
  </Dialog>
);

export const AttackDialogBox = Template.bind({});
