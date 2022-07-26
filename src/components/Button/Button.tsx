import React, { FunctionComponent, PropsWithChildren } from 'react';

interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
}) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
