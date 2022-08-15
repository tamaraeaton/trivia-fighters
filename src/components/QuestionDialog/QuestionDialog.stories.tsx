import { ComponentStory } from '@storybook/react';
import QuestionDialog from './QuestionDialog';

export default {
  title: 'QuestionDialog',
  component: QuestionDialog,
};

const Template: ComponentStory<typeof QuestionDialog> = ({
  children,
  ...args
}) => <QuestionDialog {...args}>{children}</QuestionDialog>;

export const Answer1 = Template.bind({});
Answer1.args = {
  question: 'How many moons are there?',
  answer: 'Depends on the planet',
  options: ['One', 'Four', 'None', 'Depends on the planet'],
};
