import "../css/prod.css";
import { CartContext } from "../../context/cartcontext";
import { useContext } from "react";
import { Producto } from "../../data/producto";
import imagenes from "../../assets/img/imagenes";

import { Link, NavLink, useParams } from "react-router-dom";
import ProductoDetails from "./itemdetail";
import Swal from "sweetalert2";

const Item = (props) => {
  const { Id, Description, img, Precio } = props.data;

  const { addToCart, cartList } = useContext(CartContext);

  const verMasButton = () => {
    return (
      <Link to={`/producto/${Id}`}>
        <button>Ver más</button>
      </Link>
    );
  };

  return (
    <>
      <div>
        <div className="imgproducts">
          {" "}
          <img
            id={Id}
            style={{ width: "380px", height: "400px", objectFit: "cover" }}
            src={img}
          />{" "}
        </div>
        <div className="descrip">
          <div>{Description}</div>
          <p>${Precio}</p>

          {verMasButton(Id)}
        </div>
      </div>
      <></>
    </>
  );
};

export default Item;
