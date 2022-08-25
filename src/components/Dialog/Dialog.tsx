import { FunctionComponent, PropsWithChildren } from 'react';
import './Dialog.scss';

const Dialog: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="dialogWrapper" data-testid="dialogWrapper">
      <div className="dialogContainer" data-testid="dialogContainer">
        {children}
      </div>
    </div>
  );
};

export default Dialog;
