import React from "react";
import Item from "../Item/Item";
import { useCartContext } from "../../CartContext/CartContext";
export const Cart = () => {
  const { items, clear, removeItem } = useCartContext();
  console.log("items" + items);
  return (
    <>
      <h1>Productos agregados al Carrito:</h1>
      <ul className="listContainer">
        {items.map((item) => (
          <li key={item.id}>
            <Item item={item} />
            <button onClick={removeItem}>Eliminar Item del carrito</button>
          </li>
        ))}
      </ul>
      <button onClick={clear}>Eliminar TODOS los items del carrito</button>
    </>
  );
};

export default Cart;
