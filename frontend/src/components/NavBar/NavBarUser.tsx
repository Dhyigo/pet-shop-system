import { Dropdown } from 'react-bootstrap';
import { BiSolidUserCircle } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

import { NavBarUserProps } from '../../models/components/Navbar';
import { userServices } from '../../services';

export function NavBarUser({ userName }: NavBarUserProps) {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');

  useEffect(() => {}, []);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        <span className="m-2">{userName}</span>
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
