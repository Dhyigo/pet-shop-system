import { InputHTMLAttributes } from 'react';

interface SearchBarInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export function SearchBarInput({ className, ...rest }: SearchBarInputProps) {
  return (
    <input
      className={`form-control me-2 ${className || ''}`}
      type="search"
      aria-label="Search"
      {...rest}
    />
  );
}
