import React from 'react'
import Form from '../../Components/Form/Form'
import form from '../../Utils/form';
import "./Register.css";

var whichForm=false;

function Register() {
  return (
    <div className="registerForm">
        <Form form={form} open={whichForm}/>
    </div>
  )
}

export default Register;