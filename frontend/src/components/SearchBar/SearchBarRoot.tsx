import { FormEvent, FormHTMLAttributes } from 'react';

interface SearchBarRootProps extends FormHTMLAttributes<HTMLFormElement> {
  onSubmit: () => void;
  className?: string;
}
export function SearchBarRoot({
  onSubmit,
  className,
  ...rest
}: SearchBarRootProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`d-flex ${className || ''}`}
      {...rest}
    />
  );
}
