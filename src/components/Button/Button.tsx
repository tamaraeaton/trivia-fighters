import React, { FunctionComponent, PropsWithChildren } from 'react';
export interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  classType?:
    | 'btn--correct'
    | 'btn--easy'
    | 'btn--incorrect'
    | 'btn--seth'
    | 'btn--medium';
  selected?: boolean;
  disabled?: boolean;
  size?: 's' | 'm' | 'l' | 'xl';
  icon?: JSX.Element;
}

const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  classType,
  selected,
  disabled,
  size,
  icon,
}) => {
  return (
    <button
      className={`btn ${classType} ${selected ? 'btn-selected' : ''} ${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
