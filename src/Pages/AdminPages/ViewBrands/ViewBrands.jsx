import React from 'react'
import "./ViewBrands.css";
import AdminMenu from '../../../Components/AdminComponents/AdminMenu/AdminMenu';
import BrandTable from '../../../Components/AdminComponents/BrandTable/BrandTable';

function ViewBrands() {
  return (
    <div className="viewProducts">
        <AdminMenu/>    
        <BrandTable/>
    </div>
  )
}

export default ViewBrands;