import React from 'react'
import form from '../../../Utils/form';
import "./AddBrand.css";
import AdminMenu from '../../../Components/AdminComponents/AdminMenu/AdminMenu';
import AddBrandForm from '../../../Components/AdminComponents/AddBrandForm/AddBrandForm';
import { ToastContainer } from 'react-toastify';

function AddBrand() {
  return (
    <div className="addBrand">
        <AdminMenu/>
        <AddBrandForm form={form}/>
        <ToastContainer/>
    </div>
  )
}

export default AddBrand;