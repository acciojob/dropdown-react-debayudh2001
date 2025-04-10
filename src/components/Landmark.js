import React from "react";

const Landmark = ({name, description}) => {
    return (
        <>
            <div id="landmark-title">
                <p>{name}</p>
            </div>
            <div id="landmark-description">
                <p>{description}</p>
            </div>
        </>
    )
}

export default Landmark