import React from 'react'
import form from '../../Utils/form';
import "./Login.css";
import LoginForm from '../../Components/LoginForm/LoginForm';
import { ToastContainer } from 'react-toastify';


function Login() {
  return (
    <div className="loginForm">
        <LoginForm form={form}/>
        <ToastContainer/>
    </div>
  )
}

export default Login;