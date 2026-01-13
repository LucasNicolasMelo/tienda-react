import { Link } from "react-router-dom";
import ItemCount from "./ItemCount"

export default function Item( {id, title, img, price}) {

    return (
        <div style={{border: "1px solid black", borderRadius: "8px", padding: "16px"}}>
            <h3>{title}</h3>
            <img width="200" src={img} alt="" />
            <p>$ {price}</p>
            <Link to={`/producto/${id}`}>
             <button>Ver producto</button>
            </Link>
            <ItemCount />

        </div>
    )
}