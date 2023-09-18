import React, { useState } from 'react';

const Ab = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const images = [
        'assets/images/products/product-1.jpg',
        'assets/images/products/product-6.jpg',
        'assets/images/products/product-15.jpg',
        'assets/images/products/product-6.1.jpg',
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
