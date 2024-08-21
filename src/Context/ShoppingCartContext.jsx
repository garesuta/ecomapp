import { createContext, useContext, useState } from "react";

const ShoppingCartContext = createContext();

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const valueToShare = {};
  const [cartItem, setCartItem] = useState([]);

  function getItemQuantity(id) {
    return cartItem.find((item) => item.id || 0);
  }
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
