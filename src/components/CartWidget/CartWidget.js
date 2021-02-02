import React from "react";
import "./CartWidget.css";

import useAppContext from "../../Context/Context";
export const CartWidget = () => {
  const quantity = useAppContext();
  return <div className="cartWidget">{quantity}</div>;
};

export default CartWidget;
