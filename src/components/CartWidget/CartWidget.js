import React, { useState } from "react";
import "./CartWidget.css";
import { useCartContext } from "../../CartContext/CartContext";
export const CartWidget = ({ cant }) => {
  const { totalItems } = useCartContext(); //nose porque no esta funcionando este metodo del "CartContext"
  return <div>Cart {totalItems}</div>;
};

export default CartWidget;
