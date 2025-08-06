import React, { useEffect, useState } from "react";
import cctv from "../assets/cctv.png";
import printer from "../assets/printer.png";
import laptop from "../assets/laptop.png";
import storage from '../assets/storage.png';

const images = [
  { image: cctv, alt: "cctv" },
  { image: printer, alt: "printer" },
  { image: laptop, alt: "laptop" },
  { image:storage,alt:'storage'}
];

export default function ImageSlideShow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {images.map((image, index) => (
        <img
          key={index}
          src={image.image}
          className={index === currentImageIndex ? "active" : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
}
