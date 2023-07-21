import { Form } from 'react-bootstrap';
import { useFormContext } from 'react-hook-form';
import { FormSelectProps } from '../../models/components/Form';

export function FormSelect({ name, ...rest }: FormSelectProps) {
  const { register } = useFormContext();

  return <Form.Select {...register(name)} {...rest} />;
}
