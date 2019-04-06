import React from 'react';
import Instructions from "../Instructions/instructions.js";
import "./header.css";


function Header() {

  return (
    <div className="header" id="header">
      <nav className="navbar" id="navbar">
        <span className="navbar-brand mb-0 h1" id="title">Click That Super Hero</span>
      </nav>
      <Instructions/>
    </div>
  );
}



export default Header;