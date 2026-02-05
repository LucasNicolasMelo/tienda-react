import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetItemData } from "../data/mockService";
import ItemCount from "./ItemCount";

function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    GetItemData(productId)
      .then(response => setProduct(response))
  }, [productId]);

  if (!product) return <h2>Cargando...</h2>;

  return (
    <section style={{ padding: "20px", border: "1px solid black", borderRadius: "8px" }}>
      <h2>{product.title}</h2>

      <img
        src={product.img || "https://via.placeholder.com/300"}
        alt={product.title}
        width="300"
      />

      <p>{product.description}</p>
      <h4>Precio: ${product.price}</h4>

      <ItemCount />
    </section>
  );
}

export default ItemDetailContainer;
