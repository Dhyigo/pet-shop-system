import { Link, NavLink } from 'react-router-dom';

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg  navbar-dark bg-success fixed-top">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            Pet Shop System
          </Link>

          {/* Botão menu */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon" />
          </button>

          {/* Menu */}
          <div
            className="sidebar offcanvas offcanvas-start bg-dark"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            {/* Menu Header */}
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-success fs-4">
                Pet Shop System
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>

            {/* Menu body */}
            <div className="flex-row-reverse offcanvas-body">
              {/* Search bar */}
              <form className="d-flex mb-3 my-lg-0">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-success" type="submit">
                  <i className="bi bi-search" />
                </button>
              </form>

              <ul className="navbar-nav align-items-lg-center justify-content-end flex-grow-1 pe-3">
                {/* Menu item */}
                <li className="nav-item text-right">
                  <NavLink
                    className={({ isActive }) =>
                      `nav-link w-100 ${isActive ? `active` : ''}`
                    }
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Pet
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
