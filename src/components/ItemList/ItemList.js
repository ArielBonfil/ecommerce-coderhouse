import React from "react";
import Item from "../Item/Item";

export const ItemList = (products) => {
  console.log("array de objetos: " + products); //no esta trayendo un array :( y ademas da problemas el .map
  return (
    <ul>
      {products.map((item) => (
        <li key={item.id}>
          <Item props={item} />
        </li>
      ))}
    </ul>
  );
};
export default ItemList;
