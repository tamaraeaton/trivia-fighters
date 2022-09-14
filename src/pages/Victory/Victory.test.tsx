import { screen } from '@testing-library/react';
import { renderWithProviders } from 'testHelpers';
import Victory from './Victory';

describe('Victory Page tests', () => {
  it('defeat avatar should render', () => {
    renderWithProviders(<Victory />);
    expect(screen.getByTestId('victoryAvatar')).toHaveAttribute(
      'src',
      'fox-knight_victory.svg'
    );
  });
});
