import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav>
      <NavLink to="/">
        <h1>Mi tienda</h1>
      </NavLink>

      <ul>
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
