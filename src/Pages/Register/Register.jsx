import React from 'react'
import form from '../../Utils/form';
import "./Register.css";
import RegisterForm from '../../Components/RegisterForm/RegisterForm';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Register() {
  return (
    <div className="registerForm">
        <RegisterForm form={form}/>
        <ToastContainer/>
    </div>
  )
}

export default Register;