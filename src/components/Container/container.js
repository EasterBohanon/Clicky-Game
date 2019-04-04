import React from "react";
import "./container.css";

function Container(props) {
  return (
    <div className="container">
   <div>
      <div className="card">
      <div score={props.score}  topScore={props.topScore}>
      <h1>Points: {props.score} </h1>
      <h1>Max Points:{props.topScore} </h1>
      </div>
      </div>
  </div>
  </div>

  )
}

export default Container;
