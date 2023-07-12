import { HtmlHTMLAttributes } from 'react';

type NavBarRootProps = HtmlHTMLAttributes<HTMLDivElement>;

export function NavBarRoot({ children }: NavBarRootProps) {
  return <nav>{children}</nav>;
}
