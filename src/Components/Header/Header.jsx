import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { IoCarSportSharp } from "react-icons/io5";

function Header(){

    const [menu,setMenu]=useState("");

    return(
        <header>
            <div className="logo">
                <IoCarSportSharp className="icon" />
                <h1>Autostore</h1>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}} className={menu==="home" && "underline"}><Link to="/">Home</Link></li>
                <li onClick={()=>{setMenu("cars")}} className={menu==="cars" && "underline"}><Link to="/cars">Cars</Link></li>
            </ul>
            <div className="loginButton">
                <button onClick={()=>{setMenu("login")}} className={menu==="login" && " "}><Link to="/login">Login</Link></button>
                <button><Link to="/register">Register</Link></button>
            </div>
            
        </header>
    );

}
export default Header;