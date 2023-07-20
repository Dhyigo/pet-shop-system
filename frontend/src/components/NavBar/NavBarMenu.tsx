import { HTMLAttributes } from 'react';

export function NavBarMenu(props: HTMLAttributes<HTMLUListElement>) {
  return (
    <ul
      className="navbar-nav align-items-lg-center justify-content-start flex-grow-1 ps-1"
      {...props}
    />
  );
}
