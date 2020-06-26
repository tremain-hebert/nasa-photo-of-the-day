import React from "react";
import { Badge, Alert } from "reactstrap";

const PhotoCard = ({date, explanation, image, title}) => {
    return (
        <div>
            <h1><Badge color='primary'>{title}</Badge></h1>
            <h2><Badge color='primary'>Date: {date}</Badge></h2>
            <Alert color='primary'>{explanation}</Alert>
            <img alt="Nasa" src={image} />
        </div>
    )
};

export default PhotoCard;