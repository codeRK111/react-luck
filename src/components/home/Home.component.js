import React, { Component } from "react";
import "./home.styles.scss";
import Header from "../header/Header.component.js";
import Counter from "../timer/Timer.component.js";
import History from "../history/History.component.js";
import Game from "../game-content/Game.component.js";

class Home extends Component {
    render() {
        return (
            <>
                <Header />
                <div className="home">
                    <div className="home__sidebar bg-dark p-3">
                        <History />
                    </div>
                    <div className="home__timer bg-dark p-3">
                        <Counter />
                    </div>
                    <div className="home__game-content bg-dark p-3">
                        <Game />
                    </div>
                    <div className="home__game-footer bg-dark"></div>
                </div>
            </>
        );
    }
}

export default Home;
