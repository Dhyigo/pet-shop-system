import { FormHTMLAttributes } from 'react';

export function FormRoot(props: FormHTMLAttributes<HTMLFormElement>) {
  return <form {...props} />;
}
