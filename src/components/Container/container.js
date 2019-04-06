import React from "react";
import "./container.css";

function Container(props) {
  return (
    <div className="container">
   <div>
      <div className="card">
      <h1>Points: {props.score} </h1>
      <h1>Max Points:{props.hiscore} </h1>


      {props.children}
      </div>
  </div>
  </div>

  )
}

export default Container;
