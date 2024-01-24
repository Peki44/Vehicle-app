import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import brandsService from '../../../Services/brandsService';

const EditBrandForm = observer(({ form, brand }) => {
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    const fetchBrandData = async () => {
      try {
        setInitialData(brand);
      } catch (error) {
        console.error('Error fetching brand data:', error);
      }
    };

    fetchBrandData();
  }, [brand]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      Brand: form.$('productBrand').value,
      Abrv: form.$('productBrand').value.charAt(0),
    };
    await brandsService.updateBrand(brand.id, updatedData);
    form.clear();
    // onClose(); // Close the modal or form after editing
  };

  useEffect(() => {
    if (initialData) {
      form.$('productBrand').set(initialData.Brand);
    }
  }, [initialData, form]);

  return (
    <div className="addBrandForm">
      <h2>Edit brand</h2>
      <form onSubmit={handleSubmit}>
        <label>{form.$('productBrand').label}</label>
        <input {...form.$('productBrand').bind()}  />
        <button type="submit">Update</button>
      </form>
      <p>{form.error}</p>
    </div>
  );
});

export default EditBrandForm;