import { createContext, useReducer, useState } from "react";
import { Producto } from "../data/producto";
import React from "react";
import Swal from "sweetalert2";
import { createOrder } from "../api/order";

export const CartContext = createContext(null);

export const Cartcontextprovider = ({ children }) => {

  

  const DefaultCart = () => {
    let cart = {};
    for (let i = 1; i < Producto.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartList, setcartList] = useState(DefaultCart());

  const addToCart = (itemId) => {
   
    setcartList((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    
    
  };


  const Isincart = (Id) => {
    return cartList.some((itemId) => itemId.Id === Id);
  };

  const clear = () => {
    setcartList([])
  }



  const deleteItem = (itemId) => {
    
    setcartList((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const totalammount = () => {
    let total = 0;
    for (const itemId in cartList) {
      if (cartList[itemId] > 0) {
        let info = Producto.find((product) => product.Id === Number(itemId));
        total += cartList[itemId] * info.Precio;
      }
    }
    return total;
  };

  async function finishPurchase() {
    const orderData = {
      items: cartList.map(({ item, quantity }) => ({ id: item.id, quantity, price: item.price })),
      total: totalammount(),
      date: new Date(),
    };
    const orderId = await createOrder(orderData);
    console.log(`Order with ID ${orderId} created!`, { autoClose: 10000 });
    const newCart = [];
    setcartList(newCart);
  }


  const contextvalue = {
    cartList,
    addToCart,
    deleteItem,
    Isincart,
    totalammount,
    clear,
    finishPurchase
  };

  console.log(cartList);

  return (
    <CartContext.Provider value={contextvalue}>{children}</CartContext.Provider>
  );
};
