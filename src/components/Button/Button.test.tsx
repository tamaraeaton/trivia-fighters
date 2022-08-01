import { render, screen } from '@testing-library/react';
import Button from 'components/Button/Button';

describe('Button Component', () => {
  it('should render children content', () => {
    render(<Button>Test Contents</Button>);

    expect(screen.getByRole('button')).toHaveTextContent('Test Contents');
  });
});

// nine tests for each variable design
// snapshots in Jest (exact html that would render)
