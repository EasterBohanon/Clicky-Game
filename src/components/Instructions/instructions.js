import React from "react";
import "./index.css";

function Instructions() {
    return (
        <div className="container">
            <div className="jumbotron jumbotron-fluid" id="instruct-header">
                <div className="container" id="instructions">
                    <h1 className="display-4">Welcome to Click That SuperHero!!</h1>
                    <p className="lead">Click on a SuperHero but be sure not to click on them more than once!!!</p>
                </div>
            </div>
        </div>

    )
}

export default Instructions;
