import { HTMLAttributes } from 'react';

export function FormField({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="form-row mb-3" {...rest}>
      <div className="col-12">{children}</div>
    </div>
  );
}
