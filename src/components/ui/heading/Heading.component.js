import React from "react";
import "./heading.style.scss";

const Heading = ({ heading }) => (
    <h5 id="head" class="text-center heading">
        {heading}
    </h5>
);

export default Heading;
