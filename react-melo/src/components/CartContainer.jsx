import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/firestore";
import { Link } from "react-router-dom";
import "./cartcontainer.css";

export default function CartContainer() {
  const { cart, removeItemFromCart, clearCart, countTotalPrice } =
    useContext(cartContext);

  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    emailConfirm: ""
  });

  const [orderId, setOrderId] = useState(null);

  function handleCheckout() {
    if (formData.email !== formData.emailConfirm) {
      alert("Los emails no coinciden");
      return;
    }

    const buyOrder = {
      buyer: {
        name: formData.username,
        phone: formData.phone,
        email: formData.email
      },
      items: cart,
      total: countTotalPrice(),
      date: new Date()
    };

    createBuyOrder(buyOrder).then(response => {
      setOrderId(response.id);
      clearCart();
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleReset() {
    setFormData({
      username: "",
      phone: "",
      email: "",
      emailConfirm: ""
    });
  }

  return (
    <div className="cart-container">
      <h2>Tu carrito de compras</h2>

      {orderId && <h3>Compra realizada — ID: {orderId}</h3>}

      {cart.length === 0 && !orderId && <p>No hay productos en el carrito.</p>}

      {cart.length > 0 && (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <span>{item.title}</span>
                <span>Precio unitario: ${item.price}</span>
                <span>Cantidad: {item.count}</span>
                <span>Subtotal: ${item.price * item.count}</span>
                <button onClick={() => removeItemFromCart(item.id)}>
                  Quitar
                </button>
              </div>
            ))}
          </div>

          <h3>Total: ${countTotalPrice()}</h3>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}

      {cart.length > 0 && !orderId && (
        <div className="checkout-form">
          <form onSubmit={e => e.preventDefault()}>
            <label>
              Nombre:
              <input
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
              />
            </label>

            <label>
              Email:
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>

            <label>
              Confirmar Email:
              <input
                name="emailConfirm"
                type="email"
                value={formData.emailConfirm}
                onChange={handleChange}
              />
            </label>

            <label>
              Teléfono:
              <input
                name="phone"
                type="number"
                value={formData.phone}
                onChange={handleChange}
              />
            </label>

            <button onClick={handleCheckout}>Confirmar compra</button>
            <button type="reset" onClick={handleReset}>
              Cancelar
            </button>
          </form>
        </div>
      )}

      <Link to="/">Seguir comprando</Link>
    </div>
  );
}
