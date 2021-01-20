import React from "react";
import "./Item.css";

export const Item = (item) => {
  console.log("item: " + item);
  return (
    <div className="item">
      <img src={item.image} className="item__image" alt={item.title} />
      <h1 className="item__title">{item.title}</h1>
      <p className="item__price">{item.price}</p>
      <p className="item__description">{item.description}</p>
      <p className="item__id">{item.id}</p>

      <button className="item__button">Add to Cart</button>
    </div>
  );
};

export default Item;
