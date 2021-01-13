import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = (props) => {
    const greeting = 'Ariel';
    console.log(props);
    return (
        <div>
            <p>Valor otorgado dentro de la funcion: </p>
            <h1>{greeting}</h1>
            <p>Valor pasado desde App.js:</p>
            <h1>{props.greeting}</h1>
        </div>
    )
}

export default ItemListContainer;