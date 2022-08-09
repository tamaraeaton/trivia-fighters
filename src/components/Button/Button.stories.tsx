import Button from 'components/Button/Button';
import { ComponentStory } from '@storybook/react';
import { ReactComponent as CorrectIcon } from '../../assets/images/correct.svg';
import { ReactComponent as IncorrectIcon } from '../../assets/images/incorrect.svg';

export default {
  title: 'Button',
  component: Button,
};

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Sizes = () => (
  <>
    <Button size="s">Small Button</Button>
    <Button size="m">Medium Button</Button>
    <Button size="l">Large Button</Button>
    <Button size="xl">Extra Large Button</Button>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  selected: false,
  disabled: false,
};

export const Correct = Template.bind({});
Correct.args = {
  children: 'Correct',
  classType: 'btn--correct',
  selected: false,
  disabled: false,
  icon: <CorrectIcon />,
};

export const Incorrect = Template.bind({});
Incorrect.args = {
  children: 'Incorrect',
  classType: 'btn--incorrect',
  selected: false,
  disabled: false,
  icon: <IncorrectIcon />,
};

export const Easy = Template.bind({});
Easy.args = {
  children: 'Easy',
  classType: 'btn--easy',
  selected: false,
  disabled: false,
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Medium',
  classType: 'btn--medium',
  selected: false,
  disabled: false,
};

export const Seth = Template.bind({});
Seth.args = {
  children: 'Seth',
  classType: 'btn--seth',
  selected: false,
  disabled: false,
};
