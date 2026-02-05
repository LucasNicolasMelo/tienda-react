import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import ItemCount from "./ItemCount";
import cartContext from "../context/cartContext";
import { getItemData } from "../data/firestore";
import "./itemdetail.css";

export default function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const { addItemToCart, removeItemFromCart } = useContext(cartContext);

  function onAddToCart(count) {
    addItemToCart(product, count);
  }

  useEffect(() => {
    getItemData(productId).then(response => setProduct(response));
  }, [productId]);

  return (
    <section className="item-detail">
      <h2>{product.title}</h2>
      <hr />
      <img src={product.img} alt={product.title} />
      <p>{product.description}</p>
      <h4>${product.price}</h4>
      <ItemCount onAdd={onAddToCart} />
      <button onClick={() => removeItemFromCart(product.id)}>Eliminar</button>
    </section>
  );
}
