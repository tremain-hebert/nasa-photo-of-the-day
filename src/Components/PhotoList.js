import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function PhotoList() {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=gWbEhsE3dyEV25h3gVrv09RsFoI0nqupN0cc41Gq')
        .then(res => {
            console.log('Res from useEffect of PhotoList', res);
            setPhotos(res.data)
        })
        .catch(err => {
            console.log('Error occured in useEffect of PhotoList', err);
        });
    }, []);

    return (
        <div>
            <PhotoCard
                date={photos.date}
                explanation={photos.explanation}
                image={photos.url}
                title={photos.title}
            />
        </div>
    );
}