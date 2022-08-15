import Button from 'components/Button/Button';
import { ComponentStory } from '@storybook/react';
import CorrectIcon from '../../assets/images/correct.svg';
import IncorrectIcon from '../../assets/images/incorrect.svg';

export default {
  title: 'Button',
  component: Button,
};

const Template: ComponentStory<typeof Button> = ({ children, ...args }) => (
  <Button {...args}>{children}</Button>
);

export const Next = Template.bind({});
Next.args = {
  size: 'xs',
  children: 'Next',
  selected: false,
  disabled: false,
};

export const PlayAgain = Template.bind({});
PlayAgain.args = {
  size: 's',
  children: 'Play Again',
  selected: false,
  disabled: false,
};

export const Option = Template.bind({});
Option.args = {
  size: 'm',
  children: 'Answer Option',
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
  icon: <img src={CorrectIcon} alt="correcticon" width="22px" height="22px" />,
};

export const Incorrect = Template.bind({});
Incorrect.args = {
  size: 'm',
  children: 'Incorrect',
  classType: 'btn--incorrect',
  selected: false,
  disabled: false,
  icon: (
    <img src={IncorrectIcon} alt="incorrecticon" width="22px" height="22px" />
  ),
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
