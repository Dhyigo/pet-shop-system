import { NavLink } from 'react-router-dom';
import { NavBarLinkProps } from '../../models/components/Navbar';

export function NavBarLink({ label, path, icon: Icon }: NavBarLinkProps) {
  return (
    <li className="nav-item">
      <NavLink className="nav-link" to={path}>
        {Icon && <Icon className="mr-1" size={25} />}
        {label}
      </NavLink>
    </li>
  );
}
