import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react"; // you can use any icon lib
import "swiper/css";
import "swiper/css/navigation";
import "../../../style_components/infiniteCardSlider.css";
import { carouselCards } from "../../utils/carouselCard";

const cards = carouselCards;

const ResponsiveSwiper = () => {
  return (
    <div
      style={{ padding: "40px", background: "#f5f5f5", position: "relative" }}
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        spaceBetween={20}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // ⬅️ Pauses on hover!
        }}
        slidesPerView={3}
        slidesPerGroup={1}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          800: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1250: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
        }}
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {cards.map((card, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="carousel-card">
                <div className="custom-button">{<card.icon />}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom">
        <ChevronLeft size={32} />
      </div>
      <div className="swiper-button-next-custom">
        <ChevronRight size={32} />
      </div>
    </div>
  );
};

export default ResponsiveSwiper;
