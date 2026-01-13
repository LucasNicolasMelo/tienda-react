import Item from "./Item"
import getData from "../data/mockService"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

useEffect(() => {
  getData().then( (respuesta) => {
    setProducts(respuesta)
}).catch((error) => {
    console.log(error)
})
},[])

const filteredProducts = categoryId
    ? products.filter((p) => p.category === categoryId)
    : products;

  return (
    <section>
      <h2>{props.saludo}</h2>
      {filteredProducts.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </section>
  );
}