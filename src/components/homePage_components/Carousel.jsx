import React from "react";
import "../../../style_components/carousel.css";
import ResponsiveSwiper from "./InfiniteCardSlider";
const Carousel = () => {
  return (
    <>
      <section id="carousel" data-aos="fade-down">
        <div className="carousel">
          <h1>Explore All Our Inclusive Classes</h1>
          <div className="carousel-item">
            <ResponsiveSwiper />
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
