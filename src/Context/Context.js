import React, { createContext, useContext, useState } from "react";

const Quantity = createContext(null);
export const useAppContext = () => useContext(Quantity);
export const Context = ({ children }) => {
  const [Quant, setQuant] = useState();
  const onAdd = (quantity) => {
    //
  };
  return <Quantity.Provider value={{ onAdd }}>{children}</Quantity.Provider>;
};
export default Context;
