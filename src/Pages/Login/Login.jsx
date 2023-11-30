import React from 'react'
import Form from '../../Components/Form/Form'
import form from '../../Utils/form';
import "./Login.css";

var whichForm=true;

function Login() {
  return (
    <div className="loginForm">
        <Form form={form} open={whichForm}/>
    </div>
  )
}

export default Login;