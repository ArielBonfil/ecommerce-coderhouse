import React, { createContext, useContext, useState } from "react";

const CartContext = createContext(null);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item, quantity) => {
    console.log(searchItem(item.id));
    if (searchItem(item.id) === undefined) {
      setItems((items) => [...items, { item, quantity: quantity }]);
    } else {
      alert("ya esta este item en el carrito");
    }
    console.log(items);
  };

  const clear = () => {
    setItems([]);
  };

  const searchItem = (id) => {
    return items.find((x) => x.item.id === id);
  };

  const removeItem = (id) => {
    setItems(items.filter((x) => x.item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        clear,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
