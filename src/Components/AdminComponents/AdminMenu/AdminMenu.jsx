import React from 'react'
import { Link } from 'react-router-dom';
import "./AdminMenu.css";

function AdminMenu() {
  return (
    <div className="menu">
        <h2>Admin Menu</h2>
        <Link to="/viewbrands" className="menu-item">
            <span>View brands</span>
        </Link>
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