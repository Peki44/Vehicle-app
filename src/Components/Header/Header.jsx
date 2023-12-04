import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { IoCarSportSharp } from "react-icons/io5";
import authStore from "../../Stores/authstore";
import { auth } from "../../Firebase/config";
import { onAuthStateChanged} from "firebase/auth";


function Header(){

    const [menu,setMenu]=useState("");
    const [userName,setUserName]=useState("");
    const navigate=useNavigate();

    const handleLogout = async (e) => {
        e.preventDefault();
        authStore.logout();
      
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          authStore.setUser(null);
          authStore.setAdmin(false);
          unsubscribe();
          navigate("/login");
        });
    };
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(user)=>{
            if(user){
                const email=user.email;
                const userName = email.split('@')[0];
                setUserName(userName);
            }else{
                setUserName("");
            }
        });
        return () => unsubscribe();
    },[]);

    // const handleLogout = async (e) => {
    //     e.preventDefault();
    //     await authStore.logout();
        
    //     if (!authStore.user) {
    //         navigate("/login")
    //     }
    //   };

    return(
        <header>
            <div className="logo">
                <IoCarSportSharp className="icon" />
                <h1>Autostore</h1>
            </div>
            <ul className="nav-menu">
                {authStore.isAdmin && (<li onClick={()=>{setMenu("admin")}} className={menu==="admin" && "underline"}><Link to="addbrandform">Admin</Link></li>)}
                <li onClick={()=>{setMenu("home")}} className={menu==="home" && "underline"}><Link to="/">Home</Link></li>
                <li onClick={()=>{setMenu("cars")}} className={menu==="cars" && "underline"}><Link to="/cars">Cars</Link></li>
            </ul>
            <div className="authButtons">
                {authStore.user && (<><h3>Welcome {userName}</h3><button onClick={handleLogout}><Link to="/login">Logout</Link></button></>)}
                {!authStore.user && (<>
                    <button onClick={()=>{setMenu("login")}} className={menu==="login" && " "}><Link to="/login">Login</Link></button>
                    <button><Link to="/register">Register</Link></button></>)}
            </div>
        </header>
    );

}
export default Header;
