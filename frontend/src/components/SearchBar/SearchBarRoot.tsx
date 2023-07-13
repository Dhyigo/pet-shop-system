import { FormHTMLAttributes } from 'react';

interface SearchBarRootProps extends FormHTMLAttributes<HTMLFormElement> {
  className?: string;
  onSubmit: () => void;
}
export function SearchBarRoot({ className, ...rest }: SearchBarRootProps) {
  return <form className={`d-flex ${className || ''}`} {...rest} />;
}
