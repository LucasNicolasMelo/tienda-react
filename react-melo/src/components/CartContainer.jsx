import { useContext, useState } from "react";
import cartContext from "../context/cartContext";
import { createBuyOrder } from "../data/firestore";
import { Link } from "react-router-dom";
import Button from "./Button"; 
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

  const handleCheckout = async () => {
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

    try {
      const docRef = await createBuyOrder(buyOrder);
      setOrderId(docRef.id || "ID no disponible"); 
      clearCart();
    } catch (error) {
      console.error("Error creando la orden:", error);
      alert("Hubo un error al generar la orden. Intenta nuevamente.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      username: "",
      phone: "",
      email: "",
      emailConfirm: ""
    });
  };

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
                <Button onClick={() => removeItemFromCart(item.id)}>Quitar</Button>
              </div>
            ))}
          </div>

          <h3>Total: ${countTotalPrice()}</h3>
          <div className="cart-buttons">
            <Button onClick={clearCart}>Vaciar carrito</Button>
          </div>
        </>
      )}

      {cart.length > 0 && !orderId && (
        <div className="checkout-form">
          <form onSubmit={e => e.preventDefault()}>
            <label>
              Nombre:
              <input name="username" type="text" value={formData.username} onChange={handleChange} />
            </label>

            <label>
              Email:
              <input name="email" type="email" value={formData.email} onChange={handleChange} />
            </label>

            <label>
              Confirmar Email:
              <input name="emailConfirm" type="email" value={formData.emailConfirm} onChange={handleChange} />
            </label>

            <label>
              Teléfono:
              <input name="phone" type="number" value={formData.phone} onChange={handleChange} />
            </label>

            <div className="cart-buttons">
              <Button onClick={handleCheckout}>Confirmar compra</Button>
              <Button onClick={handleReset}>Cancelar</Button>
            </div>
          </form>
        </div>
      )}

      <Link to="/" className="custom-button continue-shopping">
        Seguir comprando
      </Link>
    </div>
  );
}
