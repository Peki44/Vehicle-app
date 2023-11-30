import React from 'react'
import Item from '../../Components/Item/Item';
import "./Cars.css";

function Cars() {
  return (
    <div className="cars" >
      <div className="items">
          <Item/>
          <Item/>
          <Item/>  
          <Item/>
      </div>
    </div>
  )
}

export default Cars;