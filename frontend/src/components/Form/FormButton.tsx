import { ButtonHTMLAttributes } from 'react';
import { Loading } from '../Loading/Loading';

interface FormButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  isLoading: boolean;
}

export function FormButton({ text, isLoading, ...rest }: FormButtonProps) {
  return (
    <div className="mb-3">
      <button
        type="submit"
        className="btn btn-success"
        disabled={isLoading}
        {...rest}
      >
        {`${text} `}
        {isLoading && <Loading />}
      </button>
    </div>
  );
}
