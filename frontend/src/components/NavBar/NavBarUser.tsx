import { Dropdown } from 'react-bootstrap';
import { NavBarUserProps } from '../../models/components/Navbar';
import { BiSolidUserCircle } from 'react-icons/bi';
import { userServices } from '../../services';
import { useNavigate } from 'react-router-dom';

export function NavBarUser(props: NavBarUserProps) {
  const navigate = useNavigate();
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        <span className="m-2">{props.userName}</span>
        <BiSolidUserCircle size={35} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Configs</Dropdown.Item>
        <Dropdown.Item
          href="#/action-2"
          onClick={() => {
            userServices.logOut();
            navigate('/login');
          }}
        >
          Sair
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
