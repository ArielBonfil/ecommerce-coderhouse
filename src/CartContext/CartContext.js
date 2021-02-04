import React, { createContext, useContext, useState } from "react";

const Quantity = createContext(null);
export const useAppContext = () => useContext(Quantity);

export const CartContext = ({ children }) => {
  const [quantity, setQuantity] = useState();
  const [arrItems, setArrItems] = useState([]); //hago que sea array por si necesito guardar mas de 1 item en mi carrito ok?
  const addItem = (item) => {
    if (!arrItems.includes(item)) {
      setArrItems(...arrItems, item); //el item seria un objeto
    } else {
      alert("ya existe el item");
    }
  };
  const removeItem = (item) => {};
  const clear = () => {
    //logica
  };
  const isInCart = (item) => {
    //logica
  };
  const onAdd = (quantity) => {
    //
  };
  return <Quantity.Provider value={{ onAdd }}>{children}</Quantity.Provider>;
};
export default CartContext;
