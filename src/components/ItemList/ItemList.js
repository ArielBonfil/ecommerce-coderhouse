import React, { useState, useEffect } from "react";
import Item from "../Item/Item";

const productsURL = "https://fakestoreapi.com/products";

export const ItemList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const getItems = async () => {
    setIsLoaded(false);
    fetch({ productsURL })
      .then((response) => response.json())
      .then((data) => {
        setIsLoaded(true);
        setItems(data);
      })
      .catch((e) => {
        setIsLoaded(false);
        setError(e);
      });
  };

  useEffect(() => {
    getItems();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Item
              image={item.image}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              category={item.category}
            />
          </li>
        ))}
      </ul>
    );
  }
};

export default ItemList;
