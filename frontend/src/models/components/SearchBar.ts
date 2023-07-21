import { ButtonProps, FormControlProps, FormProps } from 'react-bootstrap';

export type SearchBarInputProps = FormControlProps;

export interface SearchBarButtonProps extends ButtonProps {
  className?: string;
}

export interface SearchBarRootProps extends FormProps {
  onSubmit: () => void;
  className?: string;
}
