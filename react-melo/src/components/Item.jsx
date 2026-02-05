import { Link } from "react-router-dom";
import Button from "./Button";
import "./Item.css";

export default function Item( {id, title, img, price}) {

    return (
        <div className="item-card">
            <h3>{title}</h3>
            <img width="200" src={img} alt="" />
            <p>$ {price}</p>
            <Link to={`/producto/${id}`}>
             <button>Ver producto</button>
            </Link>

        </div>
    )
}