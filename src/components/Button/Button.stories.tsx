import Button from 'components/Button/Button';
import { Story } from '@storybook/react';
import { ReactComponent as CorrectIcon } from '../../assets/images/correct.svg';
import { ReactComponent as IncorrectIcon } from '../../assets/images/incorrect.svg';

export default {
  title: 'Button',
  component: Button,
};
interface ButtonStoryProps {
  selected: boolean;
  disabled: boolean;
}

export const Sizes = () => (
  <>
    <Button size="s">Small Button</Button>
    <Button size="m">Medium Button</Button>
    <Button size="l">Large Button</Button>

    <Button size="xl">Extra Large Button</Button>
  </>
);

export const Primary: Story<ButtonStoryProps> = (props) => (
  <Button selected={props.selected} disabled={props.disabled}>
    Primary Button
  </Button>
);

Primary.args = { selected: false, disabled: true };

export const Correct: Story<ButtonStoryProps> = (props) => (
  <Button
    classType="btn--correct"
    selected={props.selected}
    disabled={props.disabled}
    icon={<CorrectIcon />}
  >
    Correct Button
  </Button>
);
Correct.args = { selected: false, disabled: true };

export const Incorrect: Story<ButtonStoryProps> = (props) => (
  <Button
    classType="btn--incorrect"
    selected={props.selected}
    disabled={props.disabled}
  >
    <IncorrectIcon />
    Incorrect Button
  </Button>
);

export const Easy: Story<ButtonStoryProps> = (props) => (
  <Button
    classType="btn--easy"
    selected={props.selected}
    disabled={props.disabled}
  >
    Easy Button
  </Button>
);
Easy.args = { selected: false, disabled: true };

export const Medium: Story<ButtonStoryProps> = (props) => (
  <Button
    classType="btn--medium"
    selected={props.selected}
    disabled={props.disabled}
  >
    Medium Button
  </Button>
);
Medium.args = { selected: false, disabled: true };

export const Seth: Story<ButtonStoryProps> = (props) => (
  <Button
    classType="btn--seth"
    selected={props.selected}
    disabled={props.disabled}
  >
    Seth Button
  </Button>
);
Seth.args = { selected: false, disabled: true };
