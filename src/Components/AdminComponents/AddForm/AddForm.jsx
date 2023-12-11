import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import "./AddForm.css";
import dataStore from '../../../Stores/dataStore';
import { toast } from 'react-toastify';

const AddForm=observer(({form})=>{

  useEffect(() => {
    dataStore.fetchBrands();
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (form.$('selectedBrand').value !=='' && form.$('productName').value !=='' && form.$('productPrice').value !=='') {
      const productData={
        MakeId:form.$('selectedBrand').value,
        Name:form.$('productName').value,
        Price:form.$('productPrice').value,
      }
      await dataStore.addVehicleModel(productData);
      form.reset();
      toast.success("Product successfully added!")
    }else {
      console.error('Validation errors:', form.errors());
      toast.error("Form not valid")
    }
  };

  return (
    <div className="addForm">
      <h2>Add products</h2>
      <form onSubmit={handleAddProduct}>
        <label>{form.$('selectedBrand').label}</label>
        <select {...form.$('selectedBrand').bind()}>
          <option value="">-- Select Brand --</option>
          {dataStore.brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.Brand}
            </option>
          ))}
        </select>
        <br></br>
        <label>{form.$('productName').label}</label>
        <input {...form.$('productName').bind()} />
        <label>{form.$('productPrice').label}</label>
        <input {...form.$('productPrice').bind()} />
        <button type="submit">Add</button>
      </form>
      <p>{form.error}</p>
    </div>
  );
})
export default AddForm;