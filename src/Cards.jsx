import React from "react";
import AllProjects from './AllProjects';

const Cards = () => {
    return (
        <div>
            <AllProjects direction="right" />
            <AllProjects direction="left" />
        </div>
    )
}

export default Cards;
