import { createContext, useState } from "react";
import { Producto } from "../data/producto";
import Swal from "sweetalert2";

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

  const addToCart = (itemId, quantity) => {
    quantity = 1
    setcartList((prev) => ({ ...prev, [itemId]: prev[itemId] + quantity }));
  };

  const Isincart = (Id) => {
    return cartList.some((itemId) => itemId.Id === Id);
  };

  const clear = () => {
    setcartList([])
  }

  const deleteItem = (itemId, quantity) => {
    quantity=1
    setcartList((prev) => ({ ...prev, [itemId]: prev[itemId] - quantity }));
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
  const contextvalue = {
    cartList,
    addToCart,
    deleteItem,
    Isincart,
    totalammount,
    clear
  };

  console.log(cartList);

  return (
    <CartContext.Provider value={contextvalue}>{children}</CartContext.Provider>
  );
};
