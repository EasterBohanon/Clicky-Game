import React, { Component } from 'react';
import Header from "../Header/header.js";
import Container from "../Container/container.js";
import Pictures from "../Pictures/pictures.js";
import ClickItem from "../ClickItem/clickItem.js"
import Footer from "../Footer/footer.js";
import data from "../../data.json";

class Game extends Component {
    state = {
        data,
        score: 0,
        hiscore: 0,
        alreadyClicked: []
    }

    componentDidMount() {
        this.setState({ data: this.shuffleImages(this.state.data) });
        console.log(data)
    }

    shuffleImages = data => {
        // shuffle through the image
        let i = data.length - 1;
        while (i > 0) {
            const a = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[a];
            data[a] = temp;
            i--;
        }
        return data;
    };




    handleClickItem = id => {
        let correct = false;
        const newData = this.state.data.map(item => {
            const newItem = {...item};
            if (newItem.id === id) {
                if(!newItem.clicked){
                    newItem.clicked = true;
                    correct = true;

                }
            }
            return newItem;
        });
        correct ? this.handleWin(newData)
        :this.handleLoss(newData);
        // check if id has been clicked
        // if clicked 
        // handleLoss
        // else 
        // handleWin
    };

    handleLoss = data => {
        // stop the game and display that user has lost
        this.setState({
            data: this.resetGame(data),
            score: 0
        });
        // display game
    };

    handleWin = newData => {
        // update score
        const { hiscore, score } = this.state;
        const newScore = score + 1;
        const newTopScore = Math.max(newScore, hiscore);

        this.setState({
            data: this.shuffleImages(newData),
            score: newScore,
            hiscore: newTopScore
        });

    };

    resetGame = data => {
        const resetGame = data.map(item => ({ ...item, clicked: false }));
        return this.shuffleImages(resetGame);
    };



    render() {
        return (
            <div>
                <Header />
                <br></br>
                <Container score ={this.state.score} hiscore ={this.state.hiscore}>
                {this.state.data.map(item =>(
                     <ClickItem 
                     alt={item.id}
                     key={item.id}
                     id={item.id}
                     handleClick={this.handleClickItem}
                     src={process.env.PUBLIC_URL + item.image}
                     />
                 ))}
                 </Container>
                 <br></br>
                <Footer />

            </div>



        );

    }
}

export default Game;