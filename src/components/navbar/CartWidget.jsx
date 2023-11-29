import { useContext, useState } from "react";
import { CartContext } from "../../context/cartcontext";
import { BsCart4 } from "react-icons/bs";
import { Badge } from "react-bootstrap";

function CartWidget() {
  


  return (
    <>
      <div style={{ color: "white" }}>
        <BsCart4 color="white" bg="danger" fontSize={"40px"} />
        <Badge bg="danger">0</Badge>
      </div>
    </>
  );
}
export default CartWidget;
