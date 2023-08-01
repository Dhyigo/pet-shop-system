import { Form } from 'react-bootstrap';
import { FormFieldProps } from '../../models/components/Form';

export function FormField({ className = '', ...rest }: FormFieldProps) {
  return <Form.Group className={`mb-3 ${className}`} {...rest} />;
}
