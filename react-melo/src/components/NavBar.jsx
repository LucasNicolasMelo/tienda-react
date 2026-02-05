import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./navbar.css"; 

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">
        <h1>Mi tienda</h1>
      </NavLink>

      <ul className="navbar-links">
        <li>
          <NavLink to="/category/platos">Platos</NavLink>
        </li>
        <li>
          <NavLink to="/category/cuencos">Cuencos</NavLink>
        </li>
        <li>
          <NavLink to="/category/tazas">Tazas</NavLink>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
}