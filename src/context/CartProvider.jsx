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
    const newOrder = {
      id: Date.now(), // or UUID
      date: new Date().toISOString(),
      ...orderData,
    };
    setOrders((prev) => [...prev, newOrder]);
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
