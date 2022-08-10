import { FunctionComponent, PropsWithChildren } from 'react';
import './QuestionDialog.scss';
import Button from '../Button/Button';

interface QuestionDialogProps {
  question: string;
  answer: string;
  options: string[];
}

const QuestionDialog: FunctionComponent<
  PropsWithChildren<QuestionDialogProps>
> = ({ question, answer, options }) => {
  const handleClick = () => {
    console.log(options);
    alert('this is clicked');
  };
  return (
    <div>
      <p id="question">{question}</p>
      <div className="questionDialogAnswerWrapper">
        {options.map((option) => {
          return (
            <Button
              selected={false}
              disabled={false}
              onClick={() => handleClick()}
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
