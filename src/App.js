import React from "react";
import "./App.scss";

// components

import Home from "./components/home/Home.component.js";
import Login from "./components/login/Login.component.js";
import SignUp from "./components/signup/Signup.component.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
