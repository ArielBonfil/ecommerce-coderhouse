import React, { useState } from "react";
import "./ItemCount.css";

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
  return (
    <div className="itemCount">
      <button className="itemCount__button" onClick={removeItem}>
        -
      </button>
      <span className="itemCount__cant">{cant}</span>
      <button className="itemCount__button" onClick={addItem}>
        +
      </button>
      <div className="itemCount__warning">{warning}</div>
    </div>
  );
};

export default ItemCount;
