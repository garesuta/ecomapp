import { createContext, useCallback, useContext, useState } from "react";
import ShoppingCartPage from "../Pages/ShoppingCart";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  //use state for store item
  const [cartItem, setCartItem] = useState([]);

  const cartQuantity = cartItem.reduce((quantity, item) => {
    return item.quantity + quantity;
  }, 0);
  function getItemQuantity(id) {
    return cartItem.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id, price, title, img) {
    setCartItem((currItem) => {
      if (currItem.find((item) => item.id === id) == null) {
        return [...currItem, { id, price, title, img, quantity: 1 }];
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id) {
    setCartItem((currItem) => {
      const item = currItem.find((item) => item.id === id);
      if (item?.quantity === 1) {
        return currItem.filter((item) => item.id !== id);
      } else {
        return currItem.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(id) {
    setCartItem((currItem) => {
      return currItem.filter((item) => item.id !== id);
    });
  }
  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        openCart,
        closeCart,
        cartItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
