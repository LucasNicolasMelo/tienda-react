import ItemCount from "./ItemCount"

export default function Item( {title, img, price}) {

    return (
        <div style={{border: "1px solid black", borderRadius: "8px", padding: "16px"}}>
            <h3>{title}</h3>
            <img width="200" src={img} alt="" />
            <p>$ {price}</p>
            <button>Ver producto</button>
            <ItemCount />

        </div>
    )
}