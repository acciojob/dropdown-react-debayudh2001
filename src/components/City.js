import React from "react";

const City = ({name, description}) => {
    return (
        <>
            <div id="city-title">
                <p>{name}</p>
            </div>
            <div id="city-description">
                <p>{description}</p>
            </div>
        </>
    )
}

export default City