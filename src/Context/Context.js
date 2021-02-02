import React, { createContext, useContext, useState } from "react";

const Quantity = createContext();
export const useAppContext = () => useContext(Quantity);
export const Context = ({ children }) => {
  const [Quant, setQuant] = useState(1);
  return <Quantity.Provider value={{ Quant }}>{children}</Quantity.Provider>;
};
export default Context;
