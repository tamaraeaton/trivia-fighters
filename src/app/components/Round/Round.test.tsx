import React from 'react';
import { render, screen } from '@testing-library/react';

import { Round } from './Round';

describe('<Round />', () => {
  test('renders round and round number', () => {
    render(<Round round={8} />);
    const roundElement = screen.getByText(/Round 8/i);
    expect(roundElement).toBeInTheDocument();
  });
});
