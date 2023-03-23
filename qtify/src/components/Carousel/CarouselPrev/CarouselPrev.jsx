import React from "react";
import { useSwiper } from "swiper/react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import styles from "./CarouselPrev.module.css";
function CarouselPrev() {
  const swiper = useSwiper();
  return (
    <div
      onClick={() => {
        swiper.slidePrev();
      }}
      className={styles.carouselPrev}
    >
      <KeyboardArrowLeftIcon />
    </div>
  );
}

export default CarouselPrev;
