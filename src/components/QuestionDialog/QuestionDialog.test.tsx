import { render, screen } from '@testing-library/react';
import QuestionDialog from './QuestionDialog';

describe('Question Dialog Tests', () => {
  it('should render an action dialog', () => {
    render(
      <QuestionDialog
        question="How many moons are there?"
        answer="Depends on the planet"
        options={['One', 'Four', 'None', 'Depends on the planet']}
      />
    );
    expect(screen.getByTestId('questionDialog')).toBeDefined();
    expect(screen.getByTestId('questionDialog')).toHaveClass(
      'questionDialogAnswerWrapper'
    );
  });
});
