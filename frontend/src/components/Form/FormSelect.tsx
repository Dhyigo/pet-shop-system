import { Form, FormSelectProps as SelectProps } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';

interface FormSelectProps extends SelectProps {
  name: string;
}

export function FormSelect({ name, ...rest }: FormSelectProps) {
  const { register } = useFormContext();

  return <Form.Select {...register(name)} {...rest} />;
}
