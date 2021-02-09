import React, { createContext, useContext, useState } from "react";

const CartContext = createContext(null);
export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([{}, {}, {}, {}, {}]);

  const addItem = (item, quantity) => {
    if (isInCart(item.id) === undefined) {
      setItems([...items, { item, quantity }]);
    }
  }; //no estoy logrando adicionar Items al carrito correctamente, no logro pasar los parametros en el metodo

  const clear = () => {
    setItems([]);
  };
  const isInCart = (id) => {
    items.find((item) => item.id === id);
  };
  const removeItem = (id) => {
    items.find((item) => item.id === id);
    alert("el item que queres eliminar es el:" + id);
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
