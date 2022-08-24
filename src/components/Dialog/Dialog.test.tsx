import { render, screen } from '@testing-library/react';
import ActionDialog from 'components/ActionDialog/ActionDialog';
import { Provider } from 'react-redux';
import Dialog from './Dialog';
import { store } from '../../store/index';

describe('Dialog Tests', () => {
  it('should render a dialog box', () => {
    render(<Dialog></Dialog>);
    expect(screen.getByTestId('dialogWrapper')).toBeDefined();
  });

  it('should render children', () => {
    render(
      <Provider store={store}>
        <Dialog>
          <ActionDialog />
        </Dialog>
      </Provider>
    );
    expect(screen.getByTestId('actionDialog')).toBeDefined();
  });

  it('should not render when incorrect child is used', () => {
    render(
      <Provider store={store}>
        <Dialog>
          <ActionDialog />
        </Dialog>
      </Provider>
    );
    expect(screen.queryByTestId('actionDialogg')).toBeNull();
  });
});
