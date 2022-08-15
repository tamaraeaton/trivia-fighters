import { render, screen } from '@testing-library/react';
import AttackDialog from './AttackDialog';

describe('', () => {
  it('should render an action dialog', () => {
    render(<AttackDialog></AttackDialog>);
    expect(screen.getByTestId('attackDialog')).toBeDefined();
    expect(screen.getByTestId('lightAttack')).toHaveTextContent(
      'Light Attack +1'
    );
  });
});
