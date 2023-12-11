import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import firebaseService from '../../../Services/firebaseService';

const EditForm=observer(({form, model})=>{

  const [initialData, setInitialData] = useState({});
  const [brands,setBrands]=useState([])
  
  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        setInitialData(model);
        setBrands(await firebaseService.getAllBrands());
      } catch (error) {
        console.error('Error fetching brand data:', error);
      }
    };

    fetchBrandData();
  }, [model]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      MakeId:form.$('selectedBrand').value,
      Name:form.$('productName').value,
      Price:form.$('productPrice').value,
    };
    await firebaseService.updateModel(model.id, updatedData);
    form.clear();
  };

  useEffect(() => {
    if (initialData) {
      form.$('selectedBrand').set(initialData.MakeId);
      form.$('productName').set(initialData.Name);
      form.$('productPrice').set(initialData.Price);
    }
  }, [initialData, form]);

  return (
    <div className="addForm">
      <h2>Edit products</h2>
      <form onSubmit={handleSubmit}>
        <label>{form.$('selectedBrand').label}</label>
        <select {...form.$('selectedBrand').bind()}>
          <option value="">{model.MakeId}</option>
          {brands.map((brand) => (
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
        <button type="submit">Update</button>
      </form>
      <p>{form.error}</p>
    </div>
  );
})
export default EditForm;