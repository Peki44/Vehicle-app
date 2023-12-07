import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import "./AddForm.css";
import dataStore from '../../../Stores/dataStore';

const AddForm=observer(({form})=>{

  useEffect(() => {
    dataStore.fetchBrands();
  }, []);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const productData={
      MakeId:form.$('selectedBrand').value,
      Name:form.$('productName').value,
      Price:form.$('productPrice').value,
    }
    await dataStore.addVehicleModel(productData);
    form.reset();
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

// import React from 'react';
// import { observer } from 'mobx-react';
// import "./AddForm.css";

// export default observer(({form})=>(
//     <div className="addForm">
//     <h2>Add products</h2>
//     <form>
//         <label>{form.$('productName').label}</label>
//         <input {...form.$('productName').bind()} />
//         <label>{form.$('productPrice').label}</label>
//         <input {...form.$('productPrice').bind()} />
//         <button type="submit" >Add</button>
//     </form>
//     <p>{form.error}</p>
//   </div>
// ));


 // eslint-disable-next-line no-lone-blocks
 {/* <label>{form.$('productImage').label}</label>
  <input {...form.$('productImage').bind()} /> */}