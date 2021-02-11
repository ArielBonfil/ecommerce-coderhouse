import React from "react";
import Item from "../Item/Item";
import { useCartContext } from "../../CartContext/CartContext";
export const Cart = () => {
  const { items, clear, removeItem } = useCartContext();

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
        <button onClick={clear}>Eliminar TODOS los items del carrito</button>
      </>
    );
  } else {
    return <p>No hay Items en el carro!</p>;
  }
};

export default Cart;
