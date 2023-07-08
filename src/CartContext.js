
 import React, { createContext, useState } from 'react';

 export const CartContext = createContext();

 export function CartProvider(props) {
  const [cart, setCart] = useState([]);

  function addItem(item) {
    setCart((prevCart) => [...prevCart, item]);
  }

  function removeItem(index) {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart.splice(index, 1);
      return newCart;
    });
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
