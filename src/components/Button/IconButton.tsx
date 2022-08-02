import { FunctionComponent, PropsWithChildren } from 'react';
import Button, { ButtonProps } from './Button';

export interface IconButtonProps extends ButtonProps {
  alt?: string;
  count?: 1 | 2 | 3;
}

const IconButton: FunctionComponent<PropsWithChildren<IconButtonProps>> = ({
  children,
  icon,
  alt = '',
  count = 1,
  ...buttonProps
}) => {
  const spacing: number[] = new Array(count - 1).fill(0);
  spacing.push(10);

  return (
    <Button {...buttonProps}>
      {!!count && icon && <div>{spacing.map((space) => icon)}</div>}
      {children}
    </Button>
  );
};

export default IconButton;
