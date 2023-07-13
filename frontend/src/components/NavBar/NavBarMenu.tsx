import { HTMLAttributes } from 'react';

export function NavBarMenu(props: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className="navbar-nav align-items-lg-center justify-content-end flex-grow-1 pe-3"
      {...props}
    />
  );
}
