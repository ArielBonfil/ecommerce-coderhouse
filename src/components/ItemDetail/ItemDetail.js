import React from "react";
import "./ItemDetail.css";

export const ItemDetails = ({ item }) => {
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
          <br></br>
          <a href="#" className="productPage__button">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
