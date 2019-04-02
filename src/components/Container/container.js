import React from "react";
import "./container.css";

function Container(props) {
  return <main className="container">
  <h1>Click A Super Hero!</h1>
  <h2>Click on an image to earn points, but don't click on any more than once!</h2> 
   <div>
      <div class="card">
      <div class="card-body">
      <h1>Points:<span id="points"></span></h1>
      </div>
      </div>
  </div>
  </main>
 ;
}

export default Container;
