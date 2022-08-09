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
    <div className="dialogWrapper">
      <div className="dialogMessage">{message}</div>
      <div className="dialogContainer">{children}</div>
    </div>
  );
};

export default Dialog;
