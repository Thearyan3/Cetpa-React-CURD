import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
         <div class="Navbar">
            <Link class="anchor" to="/home">Home</Link>
            <Link class="anchor" to="/table">Table</Link>
        </div>
    </div>
  )
}

export default Navbar;