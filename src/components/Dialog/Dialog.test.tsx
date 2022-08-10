import { render, screen } from '@testing-library/react';
import Dialog from './Dialog';

describe('', () => {
  it('should render a dialog box', () => {
    render(<Dialog message="Choose An Action">test</Dialog>);
    expect(screen.getByTestId('dialogWrapper')).toBeDefined();
  });

  it('should render a dialog box with message', () => {
    render(<Dialog message="Choose An Action">test</Dialog>);
    expect(screen.getByTestId('dialogMessage')).toHaveTextContent(
      'Choose An Action'
    );
  });
});
