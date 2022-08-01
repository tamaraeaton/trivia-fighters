import Button from 'components/Button/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button>Primary Button</Button>;
export const Correct = () => (
  <Button classType="btn--correct">Correct Button</Button>
);

// expectation to see 9 buttons in storybook
// think about how to pass in sizing and icons
