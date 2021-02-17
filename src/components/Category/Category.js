import React, { useState, useEffect } from "react";
import { getFirestore } from "../../firebase";
import ItemList from "../ItemList/ItemList";
export const Category = ({ category }) => {
  //aca va la logica de seleccion de productos segun la categoria recibida
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  var parts = window.location.href.split("/");
  var lastSegment = parts.pop() || parts.pop();
  //nose como resolver la parte de la recepcion de la prop que indicaria que categoria filtrar.
  const getItems = () => {
    setIsLoaded(false);
    const db = getFirestore();
    const itemCollection = db.collection("items");
    const catItems = itemCollection.where("category", "==", lastSegment);
    catItems
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
    console.log(lastSegment);
  }, []);

  if (error != null) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <ItemList items={items} />;
  }
};

export default Category;
