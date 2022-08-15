import ActionDialog from './ActionDialog';
import { ComponentStory } from '@storybook/react';
import Dialog from 'components/Dialog/Dialog';

export default {
  title: 'Action Dialog',
  component: ActionDialog,
};

const Template: ComponentStory<typeof ActionDialog> = () => (
  <Dialog message="Choose an action">
    <ActionDialog />
  </Dialog>
);

export const ActionDialogBox = Template.bind({});
