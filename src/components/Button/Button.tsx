import React, { FunctionComponent, PropsWithChildren } from 'react';
interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  classType?: string;
}

const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  classType,
}) => {
  return (
    <button className={`btn ${classType}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
