import React from 'react'
import "./ViewBrands.css";
import AdminMenu from '../../../Components/AdminComponents/AdminMenu/AdminMenu';
import BrandTable from '../../../Components/AdminComponents/BrandTable/BrandTable';
import { ToastContainer } from 'react-toastify';

function ViewBrands() {
  return (
    <div className="viewBrands">
        <AdminMenu/>    
        <BrandTable/>
        <ToastContainer/>
    </div>
  )
}

export default ViewBrands;