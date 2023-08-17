import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  <>
  <ul>

    <li>  <Link to="/">Home</Link> </li>
    <li>  <NavLink to="/Reservation"></NavLink> </li>
  </ul>
  
  </>
}

export default Navbar
