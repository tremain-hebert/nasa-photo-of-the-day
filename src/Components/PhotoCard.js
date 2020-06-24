import React from "react";

const PhotoCard = ({date, explanation, image, title}) => {
    return (
        <div>
            <h1>{title}</h1>
            <h2>Date: {date}</h2>
            <p>{explanation}</p>
            <img alt="Nasa" src={image} />
        </div>
    )
};

export default PhotoCard;