import { Form } from 'react-bootstrap';
import { SearchBarInputProps } from '../../models/components/SearchBar';

export function SearchBarInput(props: SearchBarInputProps) {
  return <Form.Control type="search" aria-label="Search" {...props} />;
}
