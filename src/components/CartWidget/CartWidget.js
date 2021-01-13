import React from 'react';
import './CartWidget.css'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

export const CartWidget = () => {
    return (
        <div className="cartWidget">
            <ShoppingBasketIcon className="cartWidget__icon"/>
            <span className="cartWidget__quantity">1</span>
        </div>
    )
}

export default CartWidget;