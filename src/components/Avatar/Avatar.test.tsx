import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';
import FoxKnight from '../../assets/images/fox-knight.svg';

describe('Avatar Component', () => {
  it('should render avatar image of fox-knight', () => {
    render(<Avatar name="You" character={FoxKnight} testID="foxKnight" />);
    expect(screen.getByTestId('foxKnight')).toBeDefined();
    expect(screen.getByTestId('foxKnight')).toHaveAttribute(
      'src',
      'fox-knight.svg'
    );
  });
});
