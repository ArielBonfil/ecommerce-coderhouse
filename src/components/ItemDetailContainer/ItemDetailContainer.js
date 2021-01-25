import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const productURL = "https://fakestoreapi.com/products/2"; //traigo un producto especifico en este caso, para mostrarlo en item detail

export const ItemListContainer = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState();

  const getItems = async () => {
    setIsLoaded(false);
    fetch(productURL)
      .then((response) => response.json())
      .then((data) => {
        setIsLoaded(true);
        setItem(data);
      })
      .catch((e) => {
        setIsLoaded(false);
        setError(e);
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
    return <ItemDetail item={item} />;
  }
};

export default ItemListContainer;
