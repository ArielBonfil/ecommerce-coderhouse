import React, { useState, useContext, useEffect } from "react";
import "./ItemCount.css";

export const Quantity = React.createContext();

const ItemCount = ({ stock, initial }) => {
  const [cant, setCant] = useState(Number(initial));
  const [warning, setWarning] = useState("");
  const removeItem = () => {
    cant === 1 ? setCant(cant) : setCant(cant - 1);
    cant === Number(stock) && setWarning("");
  };

  const addItem = () => {
    cant < stock
      ? setCant(cant + 1)
      : setWarning("no hay mas items disponibles en stock");
  };

  useEffect(() => {
    <Quantity.Provider value={cant} />;
    console.log(cant);
  }, [cant]);
  return (
    <div className="itemCount">
      <button className="itemCount__button" onClick={removeItem}>
        -
      </button>
      <Quantity.Consumer>
        {(q) => <span className="itemCount__cant">{q}</span>}
      </Quantity.Consumer>
      <button className="itemCount__button" onClick={addItem}>
        +
      </button>
      <div className="itemCount__warning">{warning}</div>
    </div>
  );
};

export default ItemCount;
