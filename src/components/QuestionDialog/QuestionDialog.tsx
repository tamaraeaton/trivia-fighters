import { FunctionComponent } from 'react';
import Button from '../Button/Button';

interface QuestionDialogProps {
  question: string;
  answer: string;
  options: string[];
}

const QuestionDialog: FunctionComponent<QuestionDialogProps> = ({
  question,
  answer,
  options,
}) => {
  return (
    <div>
      <Button />
    </div>
  );
};

export default QuestionDialog;
