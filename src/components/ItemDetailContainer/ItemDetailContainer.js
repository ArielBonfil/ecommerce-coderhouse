import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../firebase";
export const ItemDetailContainer = () => {
  const { id } = useParams();
  //const productURL = `https://fakestoreapi.com/products/${id}`; //traigo un producto especifico en este caso, para mostrarlo en item detail
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [item, setItem] = useState({});

  const getItems = () => {
    /* setIsLoaded(false);
    fetch(productURL)
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
        setIsLoaded(true);
      })
      .catch((e) => {
        setError(e);
        setIsLoaded(false);
      });
      */
    setIsLoaded(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const item = itemCollection.doc(id);
    item
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("no results!");
          return;
        }
        console.log("el item es: " + doc);
        setItem({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log("error searching items", error);
      })
      .finally(() => {
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
    return <ItemDetail item={item} />;
  }
};

export default ItemDetailContainer;
