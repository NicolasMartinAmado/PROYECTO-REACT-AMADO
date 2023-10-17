import { Children, useContext, useState } from "react"
import SumarAlCarrito from "./ItemCount";
import { UserContext, Cartprovider } from "../context/cartcontext";




export const chango = []
function Icon() {
  return (<><div style={{ color: "white" }}>
    <img style={{ width: 100 }} src="https://static.vecteezy.com/system/resources/previews/004/999/463/non_2x/shopping-cart-icon-illustration-free-vector.jpg" />
  </div>
  {chango}
  </>

  )
}
export default Icon;