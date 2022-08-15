import { FunctionComponent, PropsWithChildren } from 'react';
import Button from '../Button/Button';
import './Dialog.scss';

export interface DialogProps {
  message: string;
  showNextButton?: boolean;
}

const Dialog: FunctionComponent<PropsWithChildren<DialogProps>> = ({
  children,
  message,
  showNextButton,
}) => {
  return (
    <div className="dialogWrapper" data-testid="dialogWrapper">
      <div className="dialogMessage" data-testid="dialogMessage">
        {message}
      </div>
      <div className="nextButtonDiv">
        {/* onClick increment Round */}
        {showNextButton && <Button size="xs" children="Next"></Button>}
      </div>
      <div className="dialogContainer" data-testid="dialogContainer">
        {children}
      </div>
    </div>
  );
};

export default Dialog;
