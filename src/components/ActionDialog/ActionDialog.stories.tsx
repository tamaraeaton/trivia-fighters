import ActionDialog from './ActionDialog';
import { ComponentStory } from '@storybook/react';
import Dialog from 'components/Dialog/Dialog';
import { Provider } from 'react-redux';
import { store } from '../../store/index';

export default {
  title: 'Action Dialog',
  component: ActionDialog,
};

const Template: ComponentStory<typeof ActionDialog> = () => (
  <Provider store={store}>
    <Dialog>
      <ActionDialog />
    </Dialog>
  </Provider>
);

export const ActionDialogBox = Template.bind({});
