import Item from "./Item";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData, getCategoryData } from "../data/firestore";
import "./itemlist.css";

export default function ItemListContainer({ saludo }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const respuesta = categoryId
          ? await getCategoryData(categoryId)
          : await getData();
        setProducts(respuesta);
      } catch (error) {
        console.log("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [categoryId]);

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  return (
    <section>
      <h2>{saludo}</h2>
      <div className="item-list">
        {products.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
