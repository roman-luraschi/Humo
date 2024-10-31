import React from "react";
import Slider from "react-slick";
import "./Gallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/images/image (1).png";
import image2 from "../assets/images/image (2).png";
import image3 from "../assets/images/image (3).png";
import image4 from "../assets/images/image (4).png";
import image5 from "../assets/images/image (5).png";
import image6 from "../assets/images/image (6).png";
import Arrow from "./Arrow";

const images = [
    { src: image1, alt: "Descripción 1" },
    { src: image2, alt: "Descripción 2" },
    { src: image3, alt: "Descripción 3" },
    { src: image4, alt: "Descripción 4" },
    { src: image5, alt: "Descripción 5" },
    { src: image6, alt: "Descripción 6" },
];

const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <Arrow direction="next" />,
        prevArrow: <Arrow direction="prev" />,
    };

    return (
        <div className="gallery">
            <h1 id="gallery" className="title">Nuestra Galeria</h1>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="photo-container">
                        <img className="photo" src={image.src} alt={image.alt} />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Gallery;