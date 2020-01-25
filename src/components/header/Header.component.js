import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link className="navbar-brand" to="/">
                    Navbar
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active mr-3">
                            <div className="nav-link">
                                Luck : <span className="user-wallet">20</span>
                            </div>
                        </li>
                        <li className="nav-item active mr-3">
                            <div className="nav-link">
                                Balance :{" "}
                                <span className="user-wallet">200</span>
                            </div>
                        </li>

                        <li className="nav-item ">
                            <Link className="nav-link" to="/">
                                Log out
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
