/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes } from 'react';

interface SearchBarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'link';
  className?: string;
}

export function SearchBarButton({
  variant,
  className,
  ...rest
}: SearchBarButtonProps) {
  return <button className={`btn btn-${variant} ${className}`} {...rest} />;
}
