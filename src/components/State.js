import React from "react";

const State = ({ name, description }) => {
    return (
        <>
            <div id="state-title">
                <p>{name}</p>
            </div>
            <div id="state-description">
                <p>{description}</p>
            </div>
        </>
    )
}

export default State