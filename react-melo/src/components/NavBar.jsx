import CartWidget from "./CartWidget";

export default function NavBar() {
  return (
    <nav>
      <h1>Mi tienda</h1>

      <ul>
        <li>
            <a href="#">Platos</a>
        </li>
        <li>
            <a href="#">Cuencos</a>
        </li>
        <li>
            <a href="#">Tazas</a>
        </li>
        <li>
            <a href="#">Jarras</a>
        </li>
        <li>
            <a href="#">Fuentes</a>
        </li>
      </ul>

      <CartWidget />
    </nav>
  );
}