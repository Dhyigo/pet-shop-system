import { useFormContext } from 'react-hook-form';

interface ErrorMessageProps {
  field: string;
}

export function FormErrorMessage({ field }: ErrorMessageProps) {
  const {
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[field];

  if (!fieldError) {
    return null;
  }

  return (
    <small className="text-danger">{fieldError.message?.toString()}</small>
  );
}
