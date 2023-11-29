import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/cartcontext";
import { Producto } from "../../data/producto";
import { Link, NavLink, useParams } from "react-router-dom";
import Item from "./item";
import css from "../css/prod.css";
import CartWidget from "../navbar/CartWidget";
import Swal from "sweetalert2";
import ItemCount from "../../itemcount/itemcount";

const ProductoDetails = () => {
  const { addToCart, cartList, deleteItem } = useContext(CartContext);
 

  const { id } = useParams();
  const prod = Producto.find((item) => item.Id == id);

  return (
    <>
      <NavLink to="/cart">
        <CartWidget />
      </NavLink>
      <h1 style={{ textAlign: "center", color: "white" }}>
        DETALLE DE PRODUCTO
      </h1>
      <div className="detail">
        <div>
          <img className="imgdetail" src={prod.img} alt="" />
          <div className="desc">
            {" "}
            <p>{prod.Description}</p>
            <p>Precio: ${prod.Precio}</p>{" "}
          </div>
          <div className="comp">
            {" "}
            <button onClick={() => addToCart(id)}> Añadir al carrito </button>
           <ItemCount/>
          </div>
        </div>
      
      </div>
    </>
  );
};
export default ProductoDetails;
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>;
