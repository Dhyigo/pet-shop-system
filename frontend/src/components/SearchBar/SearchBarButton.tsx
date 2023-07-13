import { ButtonHTMLAttributes } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

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
  return (
    <button
      className={`btn btn-${variant || 'primary'} ${className}`}
      type="submit"
      {...rest}
    >
      <AiOutlineSearch />
    </button>
  );
}
