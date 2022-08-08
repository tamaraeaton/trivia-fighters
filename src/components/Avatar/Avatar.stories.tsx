import { Story } from '@storybook/react';
import Avatar, { AvatarProps } from './Avatar';
import FoxKnight from '../../assets/images/fox-knight.svg';
import WizardPig from '../../assets/images/wizard-pig.svg';
import Shadow from '../../assets/images/shadow-gradient.svg';
import ShadowBase from '../../assets/images/shadow.svg';

export default {
  title: 'Avatar',
  component: Avatar,
};

export const FoxKnightImage: Story<AvatarProps> = () => (
  <Avatar
    alt="dragon"
    name="You"
    character={FoxKnight}
    shadow={Shadow}
    shadowBase={ShadowBase}
  />
);

export const WizardPigImage: Story<AvatarProps> = () => (
  <Avatar
    alt="wizardpig"
    name="Opponent"
    character={WizardPig}
    shadow={Shadow}
    shadowBase={ShadowBase}
  />
);
