import { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export function FormInput({ name, ...rest }: FormInputProps) {
  const { register } = useFormContext();

  return (
    <input id={name} className="form-control" {...register(name)} {...rest} />
  );
}
