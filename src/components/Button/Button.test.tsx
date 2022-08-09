import { render, screen } from '@testing-library/react';
import Button from 'components/Button/Button';

describe('Button Component', () => {
  it('should render children content', () => {
    render(<Button>Test Contents</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Test Contents');
  });

  it('should render green if answer is correct', () => {
    render(
      <Button testID="correct-button" classType="btn--correct">
        Test
      </Button>
    );
    expect(screen.getByTestId('correct-button')).toHaveStyle(
      'background: linear-gradient(0deg, #007c4d 0%, #00f658 100%);'
    );
  });

  it('should render red if answer is incorrect', () => {
    render(
      <Button testID="incorrect-button" classType="btn--incorrect">
        Test
      </Button>
    );
    expect(screen.getByTestId('incorrect-button')).toHaveStyle(
      'background: linear-gradient(180deg, #ff0000 0%, #960000 100%);'
    );
  });

  it('should render if disabled', () => {
    const wrapper = render(<Button disabled={true}>Test</Button>);
    const button = wrapper.getByText('Test');
    expect(button).toBeDisabled();
    expect(button).toHaveStyle(
      'background: linear-gradient(0deg, #9f9f9f 0%, #d7d7d7 100%);'
    );
  });
});
