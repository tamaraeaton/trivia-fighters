import { FunctionComponent, PropsWithChildren, useState } from 'react';
import './QuestionDialog.scss';
import Button from '../Button/Button';
import CorrectIcon from '../../assets/images/correct.svg';
import IncorrectIcon from '../../assets/images/incorrect.svg';
interface QuestionDialogProps {
  question: string;
  answer: string;
  options: string[];
  onAnswer: (isItCorrect: boolean) => void;
}

const QuestionDialog: FunctionComponent<
  PropsWithChildren<QuestionDialogProps>
> = ({ question, answer, options, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleClick = (option: string) => {
    setSelectedOption(option);
    onAnswer(option === answer);
  };

  return (
    <div>
      <p id="question">{question}</p>
      <div className="questionDialogAnswerWrapper" data-testid="questionDialog">
        {options.map((option) => {
          return (
            <div key={option}>
              <Button
                testID="button"
                classType={
                  selectedOption && option === answer
                    ? 'btn--correct'
                    : selectedOption === option
                    ? 'btn--incorrect'
                    : undefined
                }
                size="m"
                icon={
                  selectedOption && option === answer ? (
                    <img src={CorrectIcon} alt="correct" />
                  ) : selectedOption === option ? (
                    <img src={IncorrectIcon} alt="incorrect" />
                  ) : undefined
                }
                selected={false}
                disabled={!!selectedOption}
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