import { Link } from 'react-router-dom';
import { NavBar } from '../NavBar';
import { SearchBar } from '../SearchBar';

interface MenuOption {
  label: string;
  path: string;
}

const MenuOptions: MenuOption[] = [
  { label: 'Home', path: '/' },
  { label: 'Pet Shops', path: '/pet-shops' },
  { label: 'Agendas', path: '/agendas' },
  { label: 'Meu Pets', path: '/meus-pets' },
];

export function Header() {
  const handleSearch = () => {
    console.log('Buscando');
  };

  return (
    <header className="navbar navbar-expand-lg  navbar-dark bg-success">
      <div className="container">
        <Link className="navbar-brand" to="/">
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
            <SearchBar.Root onSubmit={handleSearch} className="mb-3 my-lg-0">
              <SearchBar.Input placeholder="Pesquise..." />
              <SearchBar.Button />
            </SearchBar.Root>

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
