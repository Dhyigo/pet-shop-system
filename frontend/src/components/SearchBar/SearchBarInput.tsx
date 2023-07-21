import { Form, FormControlProps } from 'react-bootstrap';

type SearchBarInputProps = FormControlProps;

export function SearchBarInput(props: SearchBarInputProps) {
  return <Form.Control type="search" aria-label="Search" {...props} />;
}
