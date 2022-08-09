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
  testID?: string;
}

const Button: FunctionComponent<PropsWithChildren<ButtonProps>> = ({
  children,
  onClick,
  classType,
  selected,
  disabled,
  size,
  icon,
  testID,
}) => {
  return (
    <button
      className={`btn${classType ? ' ' + classType : ''}${
        selected ? ' btn-selected' : ''
      }${size ? ' ' + size : ''}`}
      onClick={onClick}
      disabled={disabled}
      data-testid={testID}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
