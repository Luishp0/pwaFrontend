import React from 'react';
import image1 from "../img/image (1).jpg";
import image2 from "../img/image (2).png";
import image3 from '../img/image (3).png';
import image4 from '../img/image (4).png';
import image5 from '../img/image (5).png';
import image6 from '../img/image (6).png';
import image7 from '../img/image.png';
import image8 from '../img/image5.png';

export default function Gallery() {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
    ];

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-4xl font-bold text-center mb-8">Galería de Fotos</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <img
                            src={image}
                            alt={`Imagen ${index + 1}`}
                            className="w-full h-56 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
