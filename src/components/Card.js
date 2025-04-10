import React from "react";

const Card = ({ name, description }) => {
    return (
        <>
            <div id="state-title">
                <p><b>State</b>: {name}</p>
            </div>
            <div id="state-description">
                <p><b>Description</b>: {description}</p>
            </div>
        </>
    )
}

export default Card