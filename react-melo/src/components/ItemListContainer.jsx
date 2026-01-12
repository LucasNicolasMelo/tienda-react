import Item from "./Item"
import getData from "../data/mockService"
import { useEffect, useState } from "react";

export default function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

useEffect(() => {
  getData().then( (respuesta) => {
    setProducts(respuesta)
}).catch((error) => {
    console.log(error)
})
},[])
  return (
    <section>
      <h2>{props.saludo}</h2>
      {
        products.map((item) => 
          <Item 
        key= {item.id}
        {...item}
          />

      )
      }
    </section>
  );
}
