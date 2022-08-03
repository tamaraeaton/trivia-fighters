import { Story } from '@storybook/react';
import HealthBar from './HealthBar';

export default {
  title: 'HealthBar',
  component: HealthBar,
};

interface ButtonStoryProps {
  isReversed: boolean;
  maxHealth: number;
  currentHealth: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// export const HealthBarFull: Story<ButtonStoryProps> = () => <HealthBar />;
