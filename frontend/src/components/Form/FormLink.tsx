import { Link, LinkProps } from 'react-router-dom';

interface FormLinkProps extends LinkProps {
  to: string;
  text: string;
  variant?: 'left' | 'center' | 'right';
}
export function FormLink({ to, text, variant, ...rest }: FormLinkProps) {
  return (
    <div className={`col-12 text-${variant || 'center'}`}>
      <Link className="text-decoration-none text-primary" to={to} {...rest}>
        {text}
      </Link>
    </div>
  );
}
