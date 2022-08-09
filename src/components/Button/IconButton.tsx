import { FunctionComponent, PropsWithChildren } from 'react';
import Button, { ButtonProps } from './Button';

export interface IconButtonProps extends ButtonProps {
  count?: 1 | 2 | 3;
}

const IconButton: FunctionComponent<PropsWithChildren<IconButtonProps>> = ({
  children,
  icon,
  count = 1,
  ...buttonProps
}) => {
  const spacing: number[] = new Array(count).fill(0);

  return (
    <Button {...buttonProps}>
      {!!count && icon && (
        <div data-testid={'icon'}>
          {spacing.map((_space, index) => (
            <div key={`icon-${index}`}>{icon}</div>
          ))}
        </div>
      )}
      {children}
    </Button>
  );
};

export default IconButton;
