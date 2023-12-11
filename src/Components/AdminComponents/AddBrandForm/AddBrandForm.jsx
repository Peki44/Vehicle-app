import React from 'react';
import { observer } from 'mobx-react';
import "./AddBrandForm.css";
import dataStore from '../../../Stores/dataStore';
import { toast } from 'react-toastify';


const AddBrandForm=observer(({ form }) => {
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.$('productBrand').value !=='') {
      const brandData = {
        Brand: form.$('productBrand').value,
        Abrv: form.$('productBrand').value.charAt(0),
      };
      await dataStore.addBrand(brandData);
      form.clear();
      toast.success("Brand successfully added!")
    } else {
      console.error('Validation errors:', form.errors());
      toast.error("Form not valid")
    }
  };

  return (
    <div className="addBrandForm">
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
export default AddBrandForm;