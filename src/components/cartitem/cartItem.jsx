import { useContext } from "react";
import { CartContext } from "../../context/cartcontext";
import { Producto } from "../../data/producto";
import Checkout from "../checkout/checkout";

const Cartitem = (props) => {
  const { Id, img, Precio, Description } = props.data;
  const { addToCart, totalammount, cartList, clear, deleteItem } =
    useContext(CartContext);
  return (
    <>
      <div id="cartitem">
        {" "}
        <h5 style={{ color: "white", textAlign: "center" }}>{Description}</h5>
        <div className="detalle">
          <img src={img} />
        </div>
        <p style={{ color: "white" }}>Precio: $ {Precio}</p>
        <div className="detalle">
          {" "}
          <button onClick={() => addToCart(Id)}> + </button>
          <input value={cartList[Id]} />
          <button onClick={() => deleteItem(Id)}> - </button>
        </div>
      </div>

      <a
        style={{
          alignItems: "center",
          alignContent: "center",
          alignSelf: "center",
        }}
        href="/producto"
      >
        <button
          style={{
            width: "150px",
            alignItems: "center",
            alignContent: "center",
            alignSelf: "center",
          }}
        >
          Seguir comprando
        </button>
      </a>
    </>
  );
};
export default Cartitem;
