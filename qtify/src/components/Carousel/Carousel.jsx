import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CarouselPrev from "./CarouselPrev/CarouselPrev";
import CarouselNext from "./CarouselNext/CarouselNext";
function Carousel({ albums, renderComponent }) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={"auto"}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <CarouselPrev />
      {albums.map((album) => (
        <SwiperSlide>
          {renderComponent(album.id, album.title, album.image, album.follows)}
        </SwiperSlide>
      ))}
      ...
      <CarouselNext />
    </Swiper>
  );
}

export default Carousel;
