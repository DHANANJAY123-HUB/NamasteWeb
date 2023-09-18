import React, { useState } from 'react';

const Ab = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const images = [
        'https://s26162.pcdn.co/wp-content/uploads/2023/08/big-banana.jpg',
        'https://via.placeholder.com/800x600?text=Image+2',
        'https://via.placeholder.com/800x600?text=Image+3',
        'https://via.placeholder.com/800x600?text=Image+4',
        'https://via.placeholder.com/800x600?text=Image+5',
        'https://via.placeholder.com/800x600?text=Image+6'
    ];

    const plusSlides = (n) => {
        const newIndex = (slideIndex + n + images.length) % images.length;
        setSlideIndex(newIndex);
    };

    const currentSlide = (n) => {
        setSlideIndex(n);
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>Image Gallery</h2>
            <div className="container">
                <div className="mySlides">
                    <div className="numbertext">
                        {slideIndex + 1} / {images.length}
                    </div>
                    <img src={images[slideIndex]} style={{ width: '50%' }} alt={`Image ${slideIndex + 1}`} />
                </div>
                <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
                <a className="next" onClick={() => plusSlides(1)}>❯</a>
                <div className="row">
                    {images.map((image, index) => (
                        <div className="column" key={index}>
                            <img
                                className={`demo cursor${index === slideIndex ? ' active' : ''}`}
                                src={image}
                                style={{ width: '10%' }}
                                onClick={() => currentSlide(index)}
                                alt={`Image ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Ab;
