import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MOCK_GAME_STATE } from 'store/mocks/game.mocks';
import { renderWithProviders } from 'testHelpers';
import QuestionDialog from './QuestionDialog';

describe('Question Dialog tests', () => {
  it('should render questionDialog boxes', () => {
    renderWithProviders(
      <QuestionDialog
        question="How many moons are there?"
        answer="Depends on the planet"
        options={['One', 'Four', 'None', 'Depends on the planet']}
        onAnswer={jest.fn()}
      ></QuestionDialog>
    );
    expect(screen.getByTestId('questionDialog')).toBeDefined();
    expect(screen.getByTestId('questionDialog')).toHaveClass(
      'questionDialogAnswerWrapper'
    );
  });

  it('should render correct if answer if correct', () => {
    const mockOnAnswer = jest.fn();
    renderWithProviders(
      <QuestionDialog
        question={MOCK_GAME_STATE.question.text}
        answer={MOCK_GAME_STATE.question.answer}
        options={MOCK_GAME_STATE.question.choices}
        onAnswer={mockOnAnswer}
      ></QuestionDialog>
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

  // test same thing down here
  it('should render incorrect if answer is incorrect', () => {
    renderWithProviders(
      <QuestionDialog
        question="How many moons are there?"
        answer="Depends on the planet"
        options={['One', 'Four', 'None', 'Depends on the planet']}
        onAnswer={jest.fn()}
      ></QuestionDialog>
    );
    const selectedButton = screen.getByRole('button', {
      name: /four/i,
    });
    userEvent.click(selectedButton);
    const incorrectImage = screen.getByRole('img', { name: /incorrect/i });
    expect(incorrectImage).toBeInTheDocument();
  });

  it('should render 4 buttons', () => {
    renderWithProviders(
      <QuestionDialog
        question="How many moons are there?"
        answer="Depends on the planet"
        options={['One', 'Four', 'None', 'Depends on the planet']}
        onAnswer={jest.fn()}
      ></QuestionDialog>
    );

    const optionButtons = screen.getAllByRole('button');
    expect(optionButtons).toHaveLength(4);
  });
});
