import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const productsURL = "https://fakestoreapi.com/products";

export const ItemListContainer = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const getItems = async () => {
    setIsLoaded(false);
    fetch(productsURL)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setIsLoaded(true);
      })
      .catch((e) => {
        setError(e);
        setIsLoaded(false);
      });
  };

  useEffect(() => {
    getItems();
  }, []);

  if (error != null) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <ItemList items={items} />;
  }
};

export default ItemListContainer;
