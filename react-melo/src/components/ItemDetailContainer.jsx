import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import ItemCount from "./ItemCount";
import cartContext from "../context/cartContext";
import { getItemData } from "../data/firestore";
import "./itemdetail.css";

export default function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [added, setAdded] = useState(false);
  const { addItemToCart, removeItemFromCart } = useContext(cartContext);

  function onAddToCart(count) {
    addItemToCart(product, count);
    setAdded(true);
  }

  useEffect(() => {
    getItemData(productId).then(response => setProduct(response));
  }, [productId]);

  return (
    <section className="item-detail">
      <h2>{product.title}</h2>
      <hr />

      <div className="item-detail-content">
        <img src={product.img} alt={product.title} />

        <div className="item-detail-info">
          <p>{product.description}</p>
          <h4>${product.price}</h4>

          {product.stock === 0 ? (
            <p>Producto sin stock</p>
          ) : (
            !added && (
              <div className="item-count-wrapper">
                <ItemCount onAdd={onAddToCart} stock={product.stock} />
              </div>
            )
          )}

          <button
            className="custom-button"
            onClick={() => removeItemFromCart(product.id)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </section>
  );
}
