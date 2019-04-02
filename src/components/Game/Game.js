import React, { Component } from 'react';
import Header from "../Header/header.js";
import Container from "../Container/container.js";
import ClickItem from "../ClickItem/clickItem.js"
import Footer from "../Footer/footer.js";
import data from "../../data.json";

class Game extends Component {
    state = {
        data,
        score: 0
    }


    render() {
        return (
            <div>
                <Header className="header" />
                <br></br>
                <Container className="container"> 
              {this.state.data.map(item => (
                <ClickItem
                //   key={item.id}
                //   id={item.id}
                //   shake={!this.state.score && this.state.topScore}
                //   handleClick={this.handleItemClick}
                //   image={item.image}
                />
              ))}       
                </Container>
            </div>


        );

    }
}

export default Game;