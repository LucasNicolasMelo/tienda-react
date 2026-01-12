import products from "../data/products"
import Item from "./Item"
import getData from "../data/mockService"


export default function ItemListContainer(props) {
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
