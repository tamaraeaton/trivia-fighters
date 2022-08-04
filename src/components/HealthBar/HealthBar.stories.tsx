import { Story } from '@storybook/react';
import HealthBar from './HealthBar';
import { HealthBarProps } from './HealthBar';

export default {
  title: 'HealthBar',
  component: HealthBar,
};

export const HealthBarFull: Story<HealthBarProps> = () => (
  <HealthBar isReversed={false} maxHealth={150} currentHealth={100} />
);

export const HealthBarLow: Story<HealthBarProps> = () => (
  <HealthBar isReversed={true} maxHealth={150} currentHealth={60} />
);
