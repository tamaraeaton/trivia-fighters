import React from 'react';
import '../styles/main.scss';

interface ButtonProps {
  /**
   * How large should the button be?
   */
  size?: 'normal' | 'large';
  /**
   * What style should the button be?
   */
  style?: 'normal' | 'disabled' | 'selected' | 'easy' | 'medium' | 'seth';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = 'normal',
  style = 'normal',
  label,
}: ButtonProps) => {
  return (
    <button
      className={['btn', `btn--${size}`, `btn--${style}`].join(' ')}
      aria-disabled={style === 'disabled'}
    >
      {label}
    </button>
  );
};
