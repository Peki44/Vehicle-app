import React from 'react'
import { Link } from 'react-router-dom';
import "./AdminMenu.css";

function AdminMenu() {
  return (
    <div className="menu">
        {/* <div className="menu-item">
            <Link>View Products</Link>
        </div>
        <div className="menu-item">
            <Link>Add Products</Link>
        </div> */}
        <h2>Admin Menu</h2>
        <Link to="/addbrandform" className="menu-item">
            <span>Add brand</span>
        </Link>
        <Link to="/viewproducts" className="menu-item">
            <span>View products</span>
        </Link>
        <Link to="/addproducts" className="menu-item">
            <span>Add products</span>
        </Link>
    </div>
  )
}
 
export default AdminMenu;