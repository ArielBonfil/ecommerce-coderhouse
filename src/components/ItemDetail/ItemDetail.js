import React, { useState, useEffect } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../../CartContext/CartContext";

export const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(0);

  const onAdd = (cant) => {
    setQuantity(cant);
  };

  return (
    <div className="productPage">
      <div className="productPage__leftColumn">
        <img src={item.image} alt={item.title} />
      </div>

      <div className="productPage__rightColumn">
        <div className="productPage__productDescription">
          <span>{item.category}</span>
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
        <div className="productPage__producPrice">
          <span>${item.price}</span>
          <br></br>
          <div>
            <ItemCount stock={15} initial={3} onAdd={onAdd} />
          </div>

          <br></br>

          <button>Agregar {quantity} items al carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
