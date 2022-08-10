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
    <Button size="xs">Next</Button>
    <Button size="s">Play Again</Button>
    <Button size="m">Option Answer</Button>
    <Button size="l">Light Attack</Button>
    <Button size="xl">Attack/Block</Button>
    <Button size="xxl">Easy/Med/Seth</Button>
  </>
);

export const Primary = Template.bind({});
Primary.args = {
  size: 'xs',
  children: 'Next',
  selected: false,
  disabled: false,
};

export const Correct = Template.bind({});
Correct.args = {
  size: 'm',
  children: 'Correct',
  classType: 'btn--correct',
  selected: false,
  disabled: false,
  icon: <CorrectIcon />,
};

export const Incorrect = Template.bind({});
Incorrect.args = {
  size: 'm',
  children: 'Incorrect',
  classType: 'btn--incorrect',
  selected: false,
  disabled: false,
  icon: <IncorrectIcon />,
};

export const Easy = Template.bind({});
Easy.args = {
  size: 'xxl',
  children: 'Easy',
  classType: 'btn--easy',
  selected: false,
  disabled: false,
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'xxl',
  children: 'Medium',
  classType: 'btn--medium',
  selected: false,
  disabled: false,
};

export const Seth = Template.bind({});
Seth.args = {
  size: 'xxl',
  children: 'Seth',
  classType: 'btn--seth',
  selected: false,
  disabled: false,
};
