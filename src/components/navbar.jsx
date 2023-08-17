
import '../styles/Navbar.css';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><NavLink to="/reservation">Reservation</NavLink></li>
    </ul>
  );
}

export default Navbar;
