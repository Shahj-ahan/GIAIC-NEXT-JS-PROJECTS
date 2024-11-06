import Style from "./nav.module.css"
import React from 'react'

function Navbar() {
  return (
    <div className={Style.nav}>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
  )
}

export default Navbar;