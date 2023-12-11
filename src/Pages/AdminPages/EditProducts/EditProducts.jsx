import React from 'react'
import form from '../../../Utils/form';
import "./EditProducts.css";
import AdminMenu from '../../../Components/AdminComponents/AdminMenu/AdminMenu';
import EditForm from '../../../Components/AdminComponents/EditForm/EditForm';
import { useParams } from 'react-router-dom';

function EditProducts() {
  const { model } = useParams();
  let modelObject;
  try {
    modelObject = JSON.parse(decodeURIComponent(model));
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
  return (
    <div className="addProducts">
        <AdminMenu/>
        <EditForm form={form} model={modelObject}/>
    </div>
  )
}

export default EditProducts;