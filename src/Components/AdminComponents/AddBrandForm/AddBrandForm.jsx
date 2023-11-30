import React from 'react';
import { observer } from 'mobx-react';
import "./AddBrandForm.css";

export default observer(({form})=>(
    <div className="addForm">
    <h2>Add brand</h2>
    <form>
        <label>{form.$('productBrand').label}</label>
        <input {...form.$('productBrand').bind()} />
        <button type="submit" >Add</button>
    </form>
    <p>{form.error}</p>
  </div>
));
