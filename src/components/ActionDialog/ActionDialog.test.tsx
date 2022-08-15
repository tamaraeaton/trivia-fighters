import { render, screen } from '@testing-library/react';
import { renderWithProviders } from 'testHelpers';
import ActionDialog from './ActionDialog';

describe('', () => {
  it('should render an action dialog', () => {
    renderWithProviders(<ActionDialog></ActionDialog>);
    expect(screen.getByTestId('actionDialog')).toBeDefined();
    expect(screen.getByTestId('attack')).toBeDefined();
  });
});
