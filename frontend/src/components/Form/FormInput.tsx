import { useFormContext } from 'react-hook-form';
import { FormInputProps } from '../../models/components/Form';

export function FormInput({ name, ...rest }: FormInputProps) {
  const { register } = useFormContext();

  return (
    <input id={name} className="form-control" {...register(name)} {...rest} />
  );
}
