import { render, screen } from '@testing-library/react';
import IconButton from 'components/Button/IconButton';
import SwordIcon from '../../assets/images/sword.svg';

describe('IconButton Component', () => {
  it('should render children content', () => {
    render(<IconButton>Test Contents</IconButton>);
    expect(screen.getByRole('button')).toHaveTextContent('Test Contents');
  });

  it('renders 1 sword by default', () => {
    render(
      <IconButton
        testID="swordButton"
        icon={<img src={SwordIcon} alt="sword" width="16px" height="16px" />}
        size="m"
      >
        Sword Button
      </IconButton>
    );
    expect(screen.getByTestId('swordButton')).toContainElement(
      screen.getByTestId('icon')
    );
    const icons = screen.getAllByAltText('sword');
    expect(icons.length).toBe(1);
  });

  it('renders the sword 3 times when passing count', () => {
    render(
      <IconButton
        testID="swordButton"
        icon={<img src={SwordIcon} alt="sword" width="16px" height="16px" />}
        size="m"
        count={3}
      >
        Sword Button
      </IconButton>
    );
    expect(screen.getByTestId('swordButton')).toContainElement(
      screen.getByTestId('icon')
    );
    const icons = screen.getAllByAltText('sword');
    expect(icons.length).toBe(3);
  });
});
