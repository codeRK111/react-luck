import React, { Component } from "react";
import "./history.style.scss";
import Heading from "../ui/heading/Heading.component.js";

class Header extends Component {
    render() {
        return (
            <div className="history h-100">
                <Heading heading="Now playing" />
            </div>
        );
    }
}

export default Header;
