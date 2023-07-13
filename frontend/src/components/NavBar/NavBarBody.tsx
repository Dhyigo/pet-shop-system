import { HTMLAttributes } from 'react';

export function NavBarBody(props: HTMLAttributes<HTMLDivElement>) {
  return <div className="flex-row-reverse offcanvas-body" {...props} />;
}
