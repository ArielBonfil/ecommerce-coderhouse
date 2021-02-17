import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import { getFirestore } from "../../firebase";

//const productsURL = "https://fakestoreapi.com/products";

export const ItemListContainer = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const getItems = () => {
    /*setIsLoaded(false);
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
*/

    setIsLoaded(false);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    itemCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("no results!");
        }
        console.log(querySnapshot.docs);
        setItems(querySnapshot.docs.map((doc) => doc.data()));
      })
      .catch((error) => {
        console.log("error searching items", error);
      })
      .finally(() => {
        setIsLoaded(true);
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
