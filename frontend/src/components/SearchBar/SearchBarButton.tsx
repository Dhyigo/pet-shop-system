import { Button, ButtonProps } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

interface SearchBarButtonProps extends ButtonProps {
  className?: string;
}

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
