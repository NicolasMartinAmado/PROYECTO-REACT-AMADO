import { useContext } from "react";
import { CartContext } from "../../context/cartcontext";
import { Producto } from "../../data/producto";
import Checkout from "../checkout/checkout";


const Cartitem = (props) => {

    const { Id, img, Precio, Description } = props.data;
    const { addToCart, totalammount, cartList, clear, deleteItem } = useContext(CartContext)
    return (
        <><div id="cartitem">
            {" "}
            <h5 style={{ color: "white", textAlign: "center" }}>{Description}</h5>
            <div className="detalle">
                <img src={img} />
            </div>
            <p style={{ color: "white" }}>Precio: $ {Precio}</p>

            <div className="detalle"> <button onClick={() => addToCart(Id)}> + </button>
                <input value={cartList[Id]} />
                <button onClick={() => deleteItem(Id)}> - </button>
            </div>
        </div>
            <div className="product" > {Producto.map((product) =>
                <><Checkout data={product} />
                </>
            )}
            </div>

        </>





    )
}
export default Cartitem;