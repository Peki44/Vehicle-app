import React from 'react'
import "./ViewProducts.css";
import AdminMenu from '../../../Components/AdminComponents/AdminMenu/AdminMenu';
import DataTable from '../../../Components/AdminComponents/DataTable/DataTable';
import { ToastContainer } from 'react-toastify';

function ViewProducts() {
  return (
    <div className="viewProducts">
        <AdminMenu/>    
        <DataTable/>
        <ToastContainer/>
    </div>
  )
}

export default ViewProducts;