import React from 'react'
import "./Item.css";

function Item(props) {
  return (
    <div className="item">
        <img src="https://www.bmw.hr/content/dam/bmw/common/all-models/5-series/sedan/2023/5-series-sedan-silver.png" alt="car"/>
        <p>{props.makeId} {props.name}</p>
        <p>Price: {props.price}€</p>
    </div>
  )
}

export default Item;