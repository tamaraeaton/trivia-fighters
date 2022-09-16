import { FunctionComponent, PropsWithChildren, useState } from 'react';
import './QuestionDialog.scss';
import Button from '../Button/Button';
import CorrectIcon from '../../assets/images/correct.svg';
import IncorrectIcon from '../../assets/images/incorrect.svg';

interface QuestionDialogProps {
  question: string;
  answer: string;
  options: string[];
  onAnswer: (option: string) => void;
}

// anytime a function is being  called by another function
// in React a component is a function

const QuestionDialog: FunctionComponent<
  PropsWithChildren<QuestionDialogProps>
> = ({ question, answer, onAnswer, options }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleClick = (option: string) => {
    setSelectedOption(option);
    // function prop that is being passed back into my component
    // the function is created in in the Game
    onAnswer(option);
  };

  return (
    <div>
      <p id="question">{question}</p>
      <div className="questionDialogAnswerWrapper" data-testid="questionDialog">
        {options.map((option) => {
          const isCorrect = selectedOption && option === answer;
          const isIncorrect =
            selectedOption && option === selectedOption && option !== answer;

          return (
            <div key={option} className="option">
              <Button
                testID="button"
                classType={
                  isCorrect
                    ? 'btn--correct'
                    : isIncorrect
                    ? 'btn--incorrect'
                    : undefined
                }
                size="m"
                icon={
                  isCorrect ? (
                    <img src={CorrectIcon} alt="correct" />
                  ) : isIncorrect ? (
                    <img src={IncorrectIcon} alt="incorrect" />
                  ) : undefined
                }
                selected={false}
                disabled={!!selectedOption}
                aria-disabled={!!selectedOption}
                onClick={() => handleClick(option)}
              >
                {option}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionDialog;
