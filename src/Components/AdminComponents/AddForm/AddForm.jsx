import React from 'react';
import { observer } from 'mobx-react';
import "./AddForm.css";

export default observer(({form})=>(
    <div className="addForm">
    <h2>Add products</h2>
    <form>
        <label>{form.$('productName').label}</label>
        <input {...form.$('productName').bind()} />
        <label>{form.$('productPrice').label}</label>
        <input {...form.$('productPrice').bind()} />
        <label>{form.$('productImage').label}</label>
        <input {...form.$('productImage').bind()} />
        <button type="submit" >Add</button>
    </form>
    <p>{form.error}</p>
  </div>
));