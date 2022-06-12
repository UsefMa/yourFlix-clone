import React from "react";
import { Link } from "react-router-dom";
import "./NavbarStyle.css";

const Navbar = () => {
  return (
    <>
      <div className="nav-container">
        <Link to= '/' >
        <p className="nav-title">YOUFLIX</p>
        
        </Link>
        <div className="btns">
        <Link to='/signin'>

          <button className="Sign-in">Sign In</button>
        
        </Link>
        <Link to='/signup'>

          <button className="Sign-up">Sign Up</button>
        
        </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
