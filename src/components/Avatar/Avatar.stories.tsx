import { ComponentMeta, Story } from '@storybook/react';
import { Provider } from 'react-redux';
import Avatar, { AvatarProps } from './Avatar';
import { store } from 'store';

export default {
  title: 'Avatar',
  component: Avatar,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof Avatar>;

export const FoxKnightImage: Story<AvatarProps> = () => (
  <Avatar testID="dragon" name="You" />
);

export const WizardPigImage: Story<AvatarProps> = () => (
  <Avatar testID="wizardpig" name="Wizard Pig" />
);
