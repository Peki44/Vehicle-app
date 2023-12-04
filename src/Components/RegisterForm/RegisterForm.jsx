import React from 'react';
import { observer } from 'mobx-react';
import { Link, useNavigate } from "react-router-dom";
import "./RegisterForm.css";
import authStore from '../../Stores/authstore';

const RegisterForm = observer(({form}) => {
  const navigate=useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    await authStore.register();
     if (authStore.user) {
      navigate('/');
    }
  };

  return (
    <div className="form">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
          <input {...form.$('email').bind()}  value={authStore.email} onChange={(e) => authStore.setEmail(e.target.value)}/>
          <input {...form.$('password').bind()} value={authStore.password} onChange={(e) => authStore.setPassword(e.target.value)}/>
          <input {...form.$('passwordConfirm').bind()} value={authStore.cpassword} onChange={(e) => authStore.setCPassword(e.target.value)}/>
          <button type="submit" >Submit</button>
      </form>
      <p>Already have an account? <Link to="/login"className="linkText">Login</Link></p>
      <p>{form.error}</p>
    </div>
  );
});
export default RegisterForm;
