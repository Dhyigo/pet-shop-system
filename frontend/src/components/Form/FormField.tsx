import { Form, FormGroupProps } from 'react-bootstrap';

export function FormField({ ...rest }: FormGroupProps) {
  return <Form.Group className="mb-3" {...rest} />;
}
