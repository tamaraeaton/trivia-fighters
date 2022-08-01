import Button from 'components/Button/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button>Primary Button</Button>;
export const Correct = () => (
  <Button classType="btn--correct">Correct Button</Button>
);

export const Incorrect = () => (
  <Button classType="btn--incorrect">Incorrect Button</Button>
);

export const Easy = () => <Button classType="btn--easy">Easy Button</Button>;

export const Medium = () => (
  <Button classType="btn--medium">Medium Button</Button>
);

export const Seth = () => <Button classType="btn--seth">Seth Button</Button>;

// expectation to see 9 buttons in storybook
// think about how to pass in sizing and icons
