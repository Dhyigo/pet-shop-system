import { FormEvent } from 'react';
import { Form, FormProps } from 'react-bootstrap';

interface SearchBarRootProps extends FormProps {
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
    <Form
      onSubmit={handleSubmit}
      className={`d-flex gap-2 ${className || ''}`}
      {...rest}
    />
  );
}
