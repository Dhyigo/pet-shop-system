import { Button } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';
import { SearchBarButtonProps } from '../../models/components/SearchBar';

export function SearchBarButton({ className, ...rest }: SearchBarButtonProps) {
  return (
    <Button
      className={`d-flex align-items-center justify-content-center ${className}`}
      type="submit"
      {...rest}
    >
      <BsSearch size={25} />
      {/* <ImSearch size={19} /> */}
    </Button>
  );
}
