import React, { useState } from "react";
import "./CartWidget.css";
import { useCartContext } from "../../CartContext/CartContext";
export const CartWidget = ({ cant }) => {
  const { items } = useCartContext(); //nose porque no esta funcionando este metodo del "CartContext"
  return <div>Cart {items.length}</div>;
};

export default CartWidget;
