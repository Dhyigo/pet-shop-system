import { Dropdown } from 'react-bootstrap';
import { NavBarUserProps } from '../../models/components/Navbar';
import { BiSolidUserCircle } from 'react-icons/bi';

export function NavBarUser(props: NavBarUserProps) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        <span className="m-2">{props.userName}</span>
        <BiSolidUserCircle size={35} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Configs</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Sair</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
