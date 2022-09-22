import { screen } from '@testing-library/react';
import { renderWithProviders } from 'testHelpers';
import Defeat from './Defeat';

describe('Defeat Page tests', () => {
  it('defeat avatar should render', () => {
    renderWithProviders(<Defeat />);
    expect(screen.getByTestId('defeatAvatar')).toHaveAttribute(
      'src',
      'fox-knight_defeated.svg'
    );
  });
});
