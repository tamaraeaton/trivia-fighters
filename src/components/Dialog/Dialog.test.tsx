import { render, screen } from '@testing-library/react';
import Dialog from './Dialog';

describe('', () => {
  it('should render a dialog box', () => {
    render(<Dialog>test</Dialog>);
    expect(screen.getByTestId('dialogWrapper')).toBeDefined();
  });

  it('should render a dialog box with message', () => {
    render(<Dialog>test</Dialog>);
    expect(screen.getByTestId('dialogMessage')).toHaveTextContent(
      'Choose An Action'
    );
  });
});
