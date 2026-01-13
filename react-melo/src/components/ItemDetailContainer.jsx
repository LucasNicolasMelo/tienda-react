import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import getData from "../data/mockService";
import ItemCount from "./ItemCount";

export default function ItemDetailContainer() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getData()
      .then((data) => {
        const found = data.find((p) => p.id === parseInt(productId));
        setProduct(found);
      })
      .catch(console.log);
  }, [productId]);

  if (!product) return <h2>Producto no encontrado</h2>;

  return (
    <section style={{ padding: "20px", border: "1px solid black", borderRadius: "8px" }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} width="300" />
      <p>{product.description}</p>
      <h4>Precio: ${product.price}</h4>
      <ItemCount />
    </section>
  );
}