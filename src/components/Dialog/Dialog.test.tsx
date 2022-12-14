import { screen } from '@testing-library/react';
import ActionDialog from 'components/ActionDialog/ActionDialog';
import Dialog from './Dialog';
import { renderWithProviders } from 'testHelpers';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe('Dialog Tests', () => {
  it('should render a dialog box', () => {
    renderWithProviders(<Dialog />);
    expect(screen.getByTestId('dialogWrapper')).toBeDefined();
  });

  it('should render children', () => {
    renderWithProviders(
      <Dialog>
        <ActionDialog />
      </Dialog>
    );
    expect(screen.getByTestId('actionDialog')).toBeDefined();
  });

  it('should not render when incorrect child is used', () => {
    renderWithProviders(
      <Dialog>
        <ActionDialog />
      </Dialog>
    );
    expect(screen.queryByTestId('actionDialogg')).toBeNull();
  });
});
