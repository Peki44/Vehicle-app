import React from 'react'
import form from '../../../Utils/form';
import "./EditBrand.css";
import AdminMenu from '../../../Components/AdminComponents/AdminMenu/AdminMenu';
import EditBrandForm from '../../../Components/AdminComponents/EditBrandForm/EditBrandForm';
import { useParams } from 'react-router-dom';

function EditBrand() {
  const { brand } = useParams();
  let brandObject;
  try {
    brandObject = JSON.parse(decodeURIComponent(brand));
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
  
  return (
    <div className="addBrand">
        <AdminMenu/>
        <EditBrandForm form={form} brand={brandObject}/>
    </div>
  )
}

export default EditBrand;