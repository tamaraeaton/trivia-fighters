import { FunctionComponent, PropsWithChildren, useState } from 'react';
import './QuestionDialog.scss';
import Button from '../Button/Button';
import { ReactComponent as CorrectIcon } from '../../assets/images/correct.svg';
import { ReactComponent as IncorrectIcon } from '../../assets/images/incorrect.svg';

interface QuestionDialogProps {
  question: string;
  answer: string;
  options: string[];
}

//  need to use redux here for answeredVerify and answering?
// is it OK to useState here?

const QuestionDialog: FunctionComponent<
  PropsWithChildren<QuestionDialogProps>
> = ({ question, answer, options }) => {
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleClick = (option: string) => {
    console.log(option === answer);
    setQuestionAnswered(true);
    setSelectedOption(option);
  };

  return (
    <div>
      <p id="question">{question}</p>
      <div className="questionDialogAnswerWrapper">
        {options.map((option) => {
          return (
            <Button
              classType={
                questionAnswered && option === answer
                  ? 'btn--correct'
                  : questionAnswered &&
                    option === selectedOption &&
                    option !== answer
                  ? 'btn--incorrect'
                  : undefined
              }
              icon={
                questionAnswered && option === answer ? (
                  <CorrectIcon />
                ) : questionAnswered &&
                  option === selectedOption &&
                  option !== answer ? (
                  <IncorrectIcon />
                ) : undefined
              }
              selected={false}
              disabled={questionAnswered ? true : false}
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
