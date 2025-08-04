import { useState } from "react";
import { CartContext } from "./CartContext";


export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const clearCart = () => setCartItems([]);

  const placeOrder = (orderData) => {
    setOrders((prev) => [...prev, orderData]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        clearCart,
        placeOrder,
        orders,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
