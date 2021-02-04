import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";

const categoriesURL = "https://fakestoreapi.com/products/categories";

export const NavBarContainer = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [cats, setCats] = useState([]);

  const getItems = async () => {
    setIsLoaded(false);
    fetch(categoriesURL)
      .then((response) => response.json())
      .then((data) => {
        setCats(data);
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
    return <NavBar cats={cats} />;
  }
};

export default NavBarContainer;
