import React, { useState } from "react";
import "./Gallery.css"; // create this CSS file if not already present

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const images = [
    "222.png",
    "23.png",
    "24.png",
    "01.jpg",
    "22.png",
    "kfkf.png",
    "3.JPG",
    "4.webp",
    "18.jpg",
    "5.webp",
    "6.JPG",
    "7.jpg",
    "8.jpg",
    "17.jpg",
    "2.jpg",
    "11.png",
    "12.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
  ];

  // show first 6 or all
  const visibleImages = showAll ? images : images.slice(0, 5);

  return (
    <section id="section-four"data-aos="fade-up"data-aos-duration="400">
      <div className="touch">
  {visibleImages.map((img, i) => (
    <div className="box" key={i}>
      <img
        src={`${process.env.PUBLIC_URL}/images/works/${img}`}
        alt={`work-${i}`}
        loading="lazy"
      />
    </div>
  ))}
</div>


      <div className="view-more-container">
        <button className="view-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </section>
  );
};

export default Gallery;
