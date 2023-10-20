import { Children, useContext, useState } from "react"
import SumarAlCarrito from "../itemDetailContainer/ItemCount";
import { UserContext, Cartprovider, CartContext } from "../../context/cartcontext";
import {BsCart4} from "react-icons/bs"
import { Badge } from "react-bootstrap";



function CartWidget() {

const {cartQuantity} = useContext(CartContext)

  return (<><div style={{ color: "white" }}>
   <BsCart4 color="white" fontSize={"40px"}/> 
     {cartQuantity() > 0 &&  <Badge bg="danger">{cartQuantity()}</Badge>}
  </div>

  </>

  )
}
export default CartWidget;