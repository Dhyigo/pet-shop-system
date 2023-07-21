import { Loading } from '../Loading/Loading';
import { FormButtonProps } from '../../models/components/Form';

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
