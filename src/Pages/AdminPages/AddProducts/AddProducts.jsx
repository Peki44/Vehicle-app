import React from 'react'
import form from '../../../Utils/form';
import "./AddProducts.css";
import AddForm from '../../../Components/AdminComponents/AddForm/AddForm';
import AdminMenu from '../../../Components/AdminComponents/AdminMenu/AdminMenu';

function AddProducts() {
  return (
    <div className="addProducts">
        <AdminMenu/>
        <AddForm form={form}/>
    </div>
  )
}

export default AddProducts;