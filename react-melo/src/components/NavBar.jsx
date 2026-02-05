import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo" aria-label="Ir al inicio">
        <h1>Mi tienda</h1>
      </NavLink>

      <ul className="navbar-links">
        <li>
          <NavLink
            to="/category/platos"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Platos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/cuencos"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Cuencos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/tazas"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Tazas
          </NavLink>
        </li>
      </ul>

      <CartWidget aria-label="Ver carrito de compras" />
    </nav>
  );
}
