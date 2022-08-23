import { ComponentStory } from '@storybook/react';
import Dialog from './Dialog';

export default {
  title: 'Dialog',
  component: Dialog,
};

const Template: ComponentStory<typeof Dialog> = () => <Dialog />;

export const DialogBox = Template.bind({});
