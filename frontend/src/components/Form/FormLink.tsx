import { Link } from 'react-router-dom';
import { FormLinkProps } from '../../models/components/Form';

export function FormLink({ to, text, variant, ...rest }: FormLinkProps) {
  return (
    <div className={`col-12 text-${variant || 'center'}`}>
      <Link className="text-decoration-none text-primary" to={to} {...rest}>
        {text}
      </Link>
    </div>
  );
}
