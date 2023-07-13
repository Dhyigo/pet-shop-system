import { ButtonHTMLAttributes } from 'react';

interface SearchBarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className: string;
}

export function SearchBarButton({ className, ...rest }: SearchBarButtonProps) {
  return (
    <button className={`btn btn-success ${className}`} type="submit" {...rest}>
      <i className="bi bi-search" />
    </button>
  );
}
