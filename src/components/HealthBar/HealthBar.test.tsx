import { render, screen } from '@testing-library/react';
import HealthBar from './HealthBar';

describe('HealthBar Component', () => {
  it('should render green if > 50', () => {
    render(
      <HealthBar
        testID="healthFull"
        isReversed={false}
        maxHealth={150}
        currentHealth={100}
      />
    );
    expect(screen.getByTestId('healthFull'));
  });
});

// test for health full gradient and icon
// test for reverse
