import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

<<<<<<< HEAD
export const ItemDetailContainer = () => {
  const { id } = useParams();
  const productURL = `https://fakestoreapi.com/products/${id}`; //traigo un producto especifico en este caso, para mostrarlo en item detail
=======
const productURL = "https://fakestoreapi.com/products/2"; //traigo un producto especifico en este caso, para mostrarlo en item detail

export const ItemListContainer = () => {
>>>>>>> 9892916c53413c7af3a03041c9385475d707268f
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState();

  const getItems = async () => {
    setIsLoaded(false);
    fetch(productURL)
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
        setIsLoaded(true);
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

export default ItemDetailContainer;
