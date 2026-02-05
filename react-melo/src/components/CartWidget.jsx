import { useContext } from "react";
import { Link } from "react-router-dom";
import cartContext from "../context/cartContext";
import "./cartwidget.css";

export default function CartWidget() {
  const { countItemsInCart } = useContext(cartContext);

  return (
    <Link to="/cart" className="cart-widget">
      <span className="cart-icon" role="img" aria-label="Carrito de compras">🛒</span>
      <span className="cart-count">{countItemsInCart()}</span>
    </Link>
  );
}
