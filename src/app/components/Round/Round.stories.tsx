import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { Round, RoundProps } from './Round';

const meta: Meta = {
  title: 'components/Round',
  component: Round,
};

export default meta;

const Template: Story<RoundProps> = (args) => <Round {...args} />;

export const Basic = Template.bind({});

Basic.args = {};
