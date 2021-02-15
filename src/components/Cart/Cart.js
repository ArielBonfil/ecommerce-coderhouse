import React, { useState } from "react";
import Item from "../Item/Item";
import { useCartContext } from "../../CartContext/CartContext";
import { Link, NavLink } from "react-router-dom";
export const Cart = () => {
  const { items, clear, removeItem, totalPrice, totalItems } = useCartContext();

  if (items.length > 0) {
    console.log(items);
    return (
      <>
        <h1>Productos agregados al Carrito:</h1>
        <ul className="listContainer">
          {items.map((i) => (
            <li key={i.item.id}>
              <Item item={i.item} />
              <span>Cantidad: {i.quantity}</span>
              <br></br>
              <button onClick={() => removeItem(i.item.id)}>
                Eliminar Item del carrito
              </button>
            </li>
          ))}
        </ul>
        <span>Precio total: {totalPrice}</span>
        <br></br>
        <span>Cant items total: {totalItems}</span>
        <br></br>
        <button onClick={clear}>Eliminar TODOS los items del carrito</button>
      </>
    );
  } else {
    return (
      <div>
        <p>No hay Items en el carro!</p>
        <Link to="/">
          <button>Volver a la home</button>
        </Link>
      </div>
    );
  }
};

export default Cart;
