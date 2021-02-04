import React, { useState, useContext, useEffect } from "react";
import CartWidget from "../CartWidget/CartWidget";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemCount.css";

export const Quantity = React.createContext();

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cant, setCant] = useState(Number(initial));
  const [warning, setWarning] = useState("");

  const removeItem = () => {
    cant === 1 ? setCant(cant) : setCant(cant - 1);
    cant === Number(stock) && setWarning("");
    onAdd(cant);
  };

  const addItem = () => {
    if (cant < stock) {
      setCant(cant + 1);
      onAdd(cant);
    } else {
      setWarning("No hay mas items disponibles en stock");
    }
  };

  return (
    <div className="itemCount">
      <button className="itemCount__button" onClick={removeItem}>
        -
      </button>

      <span>{cant}</span>

      <button className="itemCount__button" onClick={addItem}>
        +
      </button>

      <div className="itemCount__warning">{warning}</div>
    </div>
  );
};

export default ItemCount;
