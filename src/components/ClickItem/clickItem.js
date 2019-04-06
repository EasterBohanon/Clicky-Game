import React from "react";
import "./clickItem.css";

function ClickItem(props) {
    return (
     <div className="imagesDiv">
       <img
      className="hero-images"
      id={props.name}
       src={props.src}
        alt={props.id}
        aria-label="click item"
        onClick={() => props.handleClick(props.id)}
        style={{ backgroundImage: `url("${props.image}")` }}
      />
     </div> 

     
    ); 
  }
  
  export default ClickItem;