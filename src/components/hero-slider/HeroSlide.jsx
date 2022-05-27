import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const HeroSlide = ({ images, perView, pagi }) => {
  return (
    <div className="container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={perView}
        navigation
        loop
        {...pagi}
        autoplay
      >
        {images.map((img,i) => (
          <SwiperSlide key={i}>
            <img style={{ width: "100%" }} src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlide;
