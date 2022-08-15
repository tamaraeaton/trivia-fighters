import { FunctionComponent, PropsWithChildren, useState } from 'react';
import './QuestionDialog.scss';
import Button from '../Button/Button';
import { ReactComponent as CorrectIcon } from '../../assets/images/correct.svg';
import { ReactComponent as IncorrectIcon } from '../../assets/images/incorrect.svg';

interface QuestionDialogProps {
  question: string;
  answer: string;
  options: string[];
  onAnswer: (isItCorrect: boolean) => void;
}

//  need to use redux here for answeredVerify and answering?
// is it OK to useState here?

const QuestionDialog: FunctionComponent<
  PropsWithChildren<QuestionDialogProps>
> = ({ question, answer, options, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleClick = (option: string) => {
    // console.log(option === answer);
    setSelectedOption(option);
    onAnswer(option === answer);
  };

  return (
    <div>
      <p id="question">{question}</p>
      <div className="questionDialogAnswerWrapper">
        {options.map((option) => {
          return (
            <Button
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
                  <CorrectIcon />
                ) : selectedOption === option ? (
                  <IncorrectIcon />
                ) : undefined
              }
              selected={false}
              disabled={!!selectedOption}
              onClick={() => handleClick(option)}
            >
              {option}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionDialog;
