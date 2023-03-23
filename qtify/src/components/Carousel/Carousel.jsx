import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CarouselPrev from "./CarouselPrev/CarouselPrev";
import CarouselNext from "./CarouselNext/CarouselNext";
import styles from "./Carousel.module.css";
function Carousel({ albums, renderComponent }) {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={"auto"}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className={styles.swiper}
    >
      <CarouselPrev />
      {albums.map((album) => (
        <SwiperSlide>
          {renderComponent(
            album.id,
            album.title,
            album.image,
            album.follows,
            album.likes
          )}
        </SwiperSlide>
      ))}
      ...
      <CarouselNext />
    </Swiper>
  );
}

export default Carousel;
