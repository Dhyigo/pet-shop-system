import { ButtonHTMLAttributes } from 'react';
import { ImSearch } from 'react-icons/im';

interface SearchBarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'dark'
    | 'light'
    | 'link';
  className?: string;
}

export function SearchBarButton({
  variant,
  className,
  ...rest
}: SearchBarButtonProps) {
  return (
    <button
      className={`d-flex align-items-center justify-content-center btn btn-outline-${
        variant || 'primary'
      } ${className}`}
      type="submit"
      {...rest}
    >
      <ImSearch size={19} />
    </button>
  );
}
