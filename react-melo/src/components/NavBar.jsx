import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav>
      <h1>Mi tienda</h1>

      <ul>
         <li><Link to="/category/platos">Platos</Link></li>
        <li><Link to="/category/cuencos">Cuencos</Link></li>
        <li><Link to="/category/tazas">Tazas</Link></li>
      </ul>

      <CartWidget />
    </nav>
  );
}