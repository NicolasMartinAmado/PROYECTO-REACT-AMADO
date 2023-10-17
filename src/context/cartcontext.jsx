import { createContext, useState } from "react";
import { oa } from "../components/CartWidget";






export const CartContext = createContext()



export const Cartcontextprovider = ({children})=> {

 const [cartList, setcartList]= useState([])

const addToCart = (item, qty) => {
    setcartList(cartList + 1)
    return <div> {item + qty} </div>

}
const removeList = () => {
    setcartList(false)

}
const deleteItem = () => {
setcartList(false)
}

return (

  <CartContext.Provider value={{cartList, setcartList, removeList, deleteItem, addToCart}}>
{children}
  </CartContext.Provider>
)

}


