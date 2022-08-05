import { Story } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';
import FoxKnight from '../../assets/images/fox-knight.svg';
import Shadow from '../../assets/images/shadow-gradient.svg';

export default {
  title: 'Avatar',
  component: Avatar,
};

export const AvatarImage: Story<AvatarProps> = () => (
  <Avatar alt="dragon" name="You" character={FoxKnight} shadow={Shadow} />
);
