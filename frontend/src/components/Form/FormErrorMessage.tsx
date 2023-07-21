import { useFormContext } from 'react-hook-form';
import { ErrorMessageProps } from '../../models/components/Form';

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
