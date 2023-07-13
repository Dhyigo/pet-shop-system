import { HtmlHTMLAttributes } from 'react';

type NavBarRootProps = HtmlHTMLAttributes<HTMLDivElement>;

export function NavBarRoot({ children }: NavBarRootProps) {
  return (
    <nav
      className="sidebar offcanvas offcanvas-start bg-dark"
      tabIndex={-1}
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
    >
      {children}
    </nav>
  );
}
