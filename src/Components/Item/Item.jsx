import React from 'react'
import "./Item.css";

function Item(props) {
  return (
    <div className="item">
        {/* <img src={props.image} alt="car"/>
        <p>{props.name}</p>
        <p>{props.price}</p> */}
        <img src="https://www.bmw.hr/content/dam/bmw/common/all-models/5-series/sedan/2023/5-series-sedan-silver.png" alt="car"/>
        <p>BMW</p>
        <p>Price: 30000€</p>
    </div>
  )
}

export default Item;