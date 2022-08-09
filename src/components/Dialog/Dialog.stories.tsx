import { Story } from '@storybook/react';
import Dialog, { DialogProps } from './Dialog';

export default {
  title: 'Dialog',
  component: Dialog,
};

export const DialogBox: Story<DialogProps> = () => (
  <Dialog message="Choose An Action" />
);
