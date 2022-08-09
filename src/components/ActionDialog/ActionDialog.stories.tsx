import ActionDialog from './ActionDialog';
import { ComponentStory } from '@storybook/react';

export default {
  title: 'Action Dialog',
  component: ActionDialog,
};

const Template: ComponentStory<typeof ActionDialog> = () => <ActionDialog />;

export const ActionDialogBox = Template.bind({});
