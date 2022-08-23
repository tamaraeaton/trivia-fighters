import { render, screen } from '@testing-library/react';
import ActionDialog from './ActionDialog';

describe('ActionDialog component tests', () => {
  it('should render an action dialog', () => {
    render(<ActionDialog />);
    expect(screen.getByTestId('actionDialog')).toBeDefined();
    expect(screen.getByTestId('attack')).toBeDefined();
  });
});
