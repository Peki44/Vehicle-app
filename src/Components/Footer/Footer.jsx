import React from 'react'
import "./Footer.css"

const year=new Date().getFullYear();

function Footer(){
    return <footer>Copyright @ {year} - All rights reserved</footer>
}

export default Footer;