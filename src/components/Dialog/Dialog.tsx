import { FunctionComponent, PropsWithChildren } from 'react';
import './Dialog.scss';

export interface DialogProps {
  message: string;
}

const Dialog: FunctionComponent<PropsWithChildren<DialogProps>> = ({
  children,
  message,
}) => {
  return (
    <div className="dialogWrapper" data-testid="dialogWrapper">
      <div className="dialogMessage" data-testid="dialogMessage">
        {message}
      </div>
      <div className="dialogContainer" data-testid="dialogContainer">
        {children}
      </div>
    </div>
  );
};

export default Dialog;
