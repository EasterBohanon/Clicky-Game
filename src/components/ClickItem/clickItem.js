import React from "react";
import "./clickItem.css";

function ClickItem(props) {
    return (
      <div
      className="container"
        role="img"
        aria-label="click item"
        onClick={() => props.handleClick(props.id)}
        style={{ backgroundImage: `url("${props.image}")` }}
      />
    );
  }
  
  export default ClickItem;