import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';
import FoxKnight from '../../assets/images/fox-knight.svg';
import Shadow from '../../assets/images/shadow-gradient.svg';
import ShadowBase from '../../assets/images/shadow.svg';

describe('Avatar Component', () => {
  it('should render avatar image', () => {
    render(
      <Avatar
        alt="dragon"
        name="You"
        character={FoxKnight}
        shadow={Shadow}
        shadowBase={ShadowBase}
      />
    );
    expect(screen.getByTestId('avatar')).toBeDefined();
  });
});
