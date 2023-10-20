import { createContext, useState } from "react";



export const CartContext = createContext( )



export const Cartcontextprovider = ({children})=> {

 const [cartList, setcartList]= useState([0])


const addToCart = (item, qty) => {
   
  setcartList(...item, qty)


}

const clear = () => {
setcartList([])
}

const isInCart = (id) =>{
return cartList.some((item)=> item.id=== id)
}
const cartQuantity = ()=> {
  return cartList.reduce((acc, item)=> acc + item.qty)
}
const deleteItem = (id)=>{
  setcartList(cartList.filter((item)=> item.id !== id))
}
return (

  <CartContext.Provider value={{cartList, addToCart, isInCart, deleteItem, cartQuantity, clear}}>
{children}
  </CartContext.Provider>
)

}


