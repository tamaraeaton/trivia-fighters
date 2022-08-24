import { ComponentMeta, Story } from '@storybook/react';
import { Provider } from 'react-redux';
import Avatar, { AvatarProps } from './Avatar';
import { store } from 'store';
import WizardPig from '../../assets/images/wizard-pig.svg';
import FoxKnight from '../../assets/images/fox-knight.svg';

export default {
  title: 'Avatar',
  component: Avatar,
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof Avatar>;

export const FoxKnightImage: Story<AvatarProps> = () => (
  <Avatar testID="dragon" name="You" character={FoxKnight} />
);

export const WizardPigImage: Story<AvatarProps> = () => (
  <Avatar testID="wizardpig" name="Medium" character={WizardPig} />
);
