import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';
import FoxKnight from '../../assets/images/fox-knight.svg';

describe('Avatar Component', () => {
  it("should render avatar image of fox-knight with content of 'You'", () => {
    render(
      <Avatar name="You" character={FoxKnight} testID="avatar" alt="avatar" />
    );
    expect(screen.getByTestId('avatar')).toBeDefined();
    expect(screen.getByTestId('avatarImage')).toHaveAttribute(
      'src',
      'fox-knight.svg'
    );
    expect(screen.getByTestId('avatarName')).toHaveTextContent('You');
  });
});
