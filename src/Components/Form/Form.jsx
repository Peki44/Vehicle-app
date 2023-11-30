// import React from 'react'
// import { Link } from "react-router-dom";
// import "./Form.css";

// function Form (){
//   return (
//     <div className="form1">
//         <h2>Login</h2>
//         <form>
//             <input type="text" placeholder="Email" required></input>
//             <input type="password" placeholder="Password" required></input>
//             {/* <input type="password" placeholder="Confirm password" required></input> */}
//             <button type="submit">Login</button>
//         </form>
//         <p>Don't have an account? <Link className="linkText">Register</Link></p>
//     </div>
    
//   )
// }

// export default Form;
import React from 'react';
import { observer } from 'mobx-react';
import { Link } from "react-router-dom";
import "./Form.css";

export default observer(({ form, open }) => (
  <div className="form">
    <h2>{open ? "Login" : "Register"}</h2>
    <form >
        <input {...form.$('email').bind()} />
        <input {...form.$('password').bind()} />
        {open ? null : <input {...form.$('passwordConfirm').bind()} />}
        <button type="submit" >Submit</button>
    </form>
    {open ? <p>Don't have an account? <Link to="/register" className="linkText">Register</Link></p> 
    : <p>Already have an account? <Link to="/login"className="linkText">Login</Link></p>}
    <p>{form.error}</p>
  </div>
));