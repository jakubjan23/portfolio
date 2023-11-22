import React, { useState } from 'react';
import './_carousel_style.css';


const images = [
    'image1.jpg',
    'image2.jpg',
    'image2.jpg',
];



function Carousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((index + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide}>Předchozí</button>

                    <img src={images[index]} alt={`Snímek ${index + 1}`} />

            <button onClick={nextSlide}>Další</button>
        </div>
    );
}

export default Carousel;