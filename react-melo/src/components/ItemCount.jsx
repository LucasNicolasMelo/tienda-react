import { useState } from "react";
import "./itemcount.css";

export default function ItemCount({ onAdd }) {
  const [count, setCount] = useState(1);

  function handleResta() {
    if (count > 1) setCount(count - 1);
  }

  function handleSuma() {
    setCount(count + 1);
  }

  return (
    <div className="item-count-container">
      <div className="item-count-controls">
        <button onClick={handleResta}>-</button>
        <span>{count}</span>
        <button onClick={handleSuma}>+</button>
      </div>
      <button className="add-to-cart-btn" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
}
