import { Link } from 'react-router-dom';
import { NavBar } from '../NavBar';
import { MenuOption } from '../../models/components/Navbar';

const MenuOptions: MenuOption[] = [
  { label: 'Home', path: '/' },
  { label: 'Pet Shops', path: '/pet-shops' },
  { label: 'Agendas', path: '/agendas' },
  { label: 'Meu Pets', path: '/meus-pets' },
];

export function Header() {
  return (
    <header className="navbar navbar-expand-lg  navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand fs-4" to="/">
          Pet Shop System
        </Link>

        <NavBar.ButtonOpen />

        <NavBar.Root>
          <NavBar.Header>
            <h5 className="offcanvas-title text-success fs-4">
              Pet Shop System
            </h5>
          </NavBar.Header>

          <NavBar.Body>
            <NavBar.User />

            <NavBar.Menu>
              {MenuOptions.map((option) => (
                <NavBar.Link
                  key={option.path}
                  label={option.label}
                  path={option.path}
                />
              ))}
            </NavBar.Menu>
          </NavBar.Body>
        </NavBar.Root>
      </div>
    </header>
  );
}
