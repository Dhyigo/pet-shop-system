import { FormEvent } from 'react';
import { Form } from 'react-bootstrap';
import { SearchBarRootProps } from '../../models/components/SearchBar';

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
