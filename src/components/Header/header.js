import React from 'react';
import Instructions from "../Instructions/instructions.js";
import "./header.css";


function Header() {

  return (
    <div className="header">
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Click That Super Hero</span>
      </nav>
      <Instructions/>
    </div>
  );
}



export default Header;