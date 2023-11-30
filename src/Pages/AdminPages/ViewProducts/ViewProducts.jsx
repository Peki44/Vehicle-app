import React from 'react'
import "./ViewProducts.css";
import AdminMenu from '../../../Components/AdminComponents/AdminMenu/AdminMenu';
import DataTable from '../../../Components/AdminComponents/DataTable/DataTable';

function ViewProducts() {
  return (
    <div className="viewProducts">
        <AdminMenu/>    
        <DataTable/>
    </div>
  )
}

export default ViewProducts;