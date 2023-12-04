import React from 'react';
import { observer } from 'mobx-react';
import { Link, useNavigate } from "react-router-dom";
import authStore from '../../Stores/authstore';
import "./LoginForm.css";

const LoginForm = observer(({form}) => {
  const navigate=useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    await authStore.login();
    if (authStore.user) {
      navigate('/');
    }
    
  };

 return (
  <div className="form">
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
        <input {...form.$('email').bind()} value={authStore.email} onChange={(e) => authStore.setEmail(e.target.value)}/>
        <input {...form.$('password').bind()} value={authStore.password} onChange={(e) => authStore.setPassword(e.target.value)}/>
        <button type="submit" >Submit</button>
    </form>
    <p>Don't have an account? <Link to="/register" className="linkText">Register</Link></p> 
    <p>{form.error}</p>
  </div>
 );
});
export default LoginForm;