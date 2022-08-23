import { render, screen } from '@testing-library/react';
import Dialog from './Dialog';

describe('Dialog box tests', () => {
  it('should render a dialog box', () => {
    render(<Dialog>test</Dialog>);
    expect(screen.getByTestId('dialogWrapper')).toBeDefined();
  });
});
