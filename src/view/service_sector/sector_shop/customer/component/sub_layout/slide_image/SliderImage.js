import React from "react";
import "./slider.scss"; // Import SCSS vào React

const images = [
  { src:"https://file.hstatic.net/1000253775/file/new_banner_pc.jpg",link:"/"},
  { src:"https://file.hstatic.net/1000253775/file/new_banner_pc_copy.jpg",link:"/"},
  { src:"https://file.hstatic.net/1000253775/file/diachi_dk.jpg",link:"/"},
  { src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfvJh63SWzzeSeuBNpvVbCwhNcfAtNJGBV8Q&s",link:"/"},
  { src:"https://file.hstatic.net/1000253775/file/new_banner_pc_copy.jpg",link:"/"},
];
const animationClass = `slide-${images.length}img`;

const Slider = () => {
  return (
    <div className="slider">
      <div
        className="slides"
        style={{ animation: `${animationClass} 20s  infinite linear` }}
      >
        {images.map((item, index) => (
          <div className="slide" key={index}>
            <a href={item.link}>
            <img src={item.src} alt={`Slide ${index + 1}`} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
