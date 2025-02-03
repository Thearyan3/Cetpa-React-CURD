import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
         <div class="Navbar">
            <Link class="anchor" to="/home">Home</Link>
            <Link class="anchor" to="/About">About Us</Link>
        </div>
    </div>
  )
}

export default Navbar;