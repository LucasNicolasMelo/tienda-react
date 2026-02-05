import Item from "./Item";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData, getCategoryData } from "../data/firestore";
import "./itemlist.css";

export default function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    if (categoryId) {
      getCategoryData(categoryId)
        .then(respuesta => {
          setProducts(respuesta);
          setLoading(false);
        })
        .catch(error => console.log(error));
    } else {
      getData()
        .then(respuesta => {
          setProducts(respuesta);
          setLoading(false);
        })
        .catch(error => console.log(error));
    }
  }, [categoryId]);

  if (loading) {
    return <h2>Cargando productos...</h2>;
  }

  return (
    <section>
      <h2>{props.saludo}</h2>

      <div className="item-list">
        {products.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
