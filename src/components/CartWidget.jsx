import { Children, useContext, useState } from "react"
import SumarAlCarrito from "./ItemCount";
import { UserContext, Cartprovider } from "../context/cartcontext";




export const chango = [0]
function Icon() {
  return (<><div style={{ color: "white" }}>
   <a href="/cartitem"> <img style={{ width: 100 }} src="https://static.vecteezy.com/system/resources/previews/004/999/463/non_2x/shopping-cart-icon-illustration-free-vector.jpg" alt="Carrito" /> </a> 
  </div>
  {chango}
  </>

  )
}
export default Icon;