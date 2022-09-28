import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MOCK_GAME_STATE } from 'store/mocks/game.mocks';
import { renderWithProviders } from 'testHelpers';
import QuestionDialog from './QuestionDialog';

describe('Question Dialog tests', () => {
  it('should render questionDialog with buttons that change accordingly per correct/incorrect answer', () => {
    const mockOnAnswer = jest.fn();
    renderWithProviders(
      <QuestionDialog
        question={MOCK_GAME_STATE.question.text}
        answer={MOCK_GAME_STATE.question.answer}
        options={MOCK_GAME_STATE.question.choices}
        onAnswer={mockOnAnswer}
      />
    );
    // ensure question dialog box appears with wrapper
    expect(screen.getByTestId('questionDialog')).toBeDefined();
    expect(screen.getByTestId('questionDialog')).toHaveClass(
      'questionDialogAnswerWrapper'
    );
    const selectedButton = screen.getByRole('button', {
      name: /depends on the planet/i,
    });
    userEvent.click(selectedButton);
    // ensuring onAnswer receives option on the button that I clicked
    expect(mockOnAnswer).toHaveBeenLastCalledWith(
      MOCK_GAME_STATE.question.choices[3]
    );
    // ensuring class name is correct
    expect(selectedButton.className).toContain('btn--correct');
  });
});
