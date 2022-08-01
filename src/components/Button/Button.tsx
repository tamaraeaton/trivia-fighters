import React, { FunctionComponent, PropsWithChildren } from 'react';
interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  classType?: string;
  // hover: boolean;
}

const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  classType,
  // hover,
}) => {
  return (
    <button className={`btn ${classType}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
