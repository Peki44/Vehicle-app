import React from 'react';
import { observer } from 'mobx-react';
import "./AddBrandForm.css";
import dataStore from '../../../Stores/dataStore';


export default observer(({ form }) => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();

      const brandData = {
        Brand: form.$('productBrand').value,
        Abrv:form.$('productBrand').value.charAt(0)
      }
      await dataStore.addBrand(brandData);
      form.clear();
  };

  return (
    <div className="addForm">
      <h2>Add brand</h2>
      <form onSubmit={handleSubmit}>
        <label>{form.$('productBrand').label}</label>
        <input {...form.$('productBrand').bind()} />
        <button type="submit">Add</button>
      </form>
      <p>{form.error}</p>
    </div>
  );
});