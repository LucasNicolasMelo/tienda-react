import { createContext, useState } from "react";

const cartContext = createContext({ cart: [] });
const DefaultContextProvider = cartContext.Provider;

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function addItemToCart(item, count) {
    const newCart = structuredClone(cart);
    newCart.push({ ...item, count });
    setCart(newCart);
  }

  function removeItemFromCart(idRemove) {
    const newCart = cart.filter(item => item.id !== idRemove);
    setCart(newCart);
  }

  function clearCart() {
    setCart([]);
  }

  function countItemsInCart() {
    return cart.reduce((total, item) => total + item.count, 0);
  }

  function countTotalPrice() {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  }

  return (
    <DefaultContextProvider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        clearCart,
        countItemsInCart,
        countTotalPrice
      }}
    >
      {children}
    </DefaultContextProvider>
  );
}

export default cartContext;
