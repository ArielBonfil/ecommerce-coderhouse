import React from "react";
import Item from "../Item/Item";
import "./ItemList.css";
export const ItemList = ({ items }) => {
  console.log("array de objetos: " + items); //no esta trayendo un array :( y ademas da problemas el .map
  return (
    <ul className="listContainer">
      {items.map((item) => (
        <li key={item.id}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  );
};
export default ItemList;
